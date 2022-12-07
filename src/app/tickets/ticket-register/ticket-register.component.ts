import { NgForm } from '@angular/forms'
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { priorityValues } from 'src/app/shared/priority';
import { TagService } from 'src/app/services/tag.service';
import { Tag } from 'src/app/shared/tag';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/shared/ticket';
import { AutoComplete } from 'primeng/autocomplete';
import { FileUpload } from 'primeng/fileupload';

export const createTagTitle: string = 'Create tag:';
@Component({
  selector: 'app-ticket-register',
  templateUrl: './ticket-register.component.html',
  styleUrls: ['./ticket-register.component.css']
})
export class TicketRegisterComponent implements OnInit {

  priorities: string[] = [];

  tags: Tag[] = [];
  filteredTags: any[] = [];
  ticket: Ticket = new Ticket();
  files: any[] = [];
  saveTag: boolean = false;
  saveTicket: boolean = false;

  @ViewChild('autoComplete') 
  autoComplete?: AutoComplete;

  @ViewChild('fileUpload')
  fileUpload?: FileUpload;

  constructor(
    private tagService: TagService,
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.priorities = this.getPriorities();
    this.tagService.list().then(tags => this.tags = tags);
  }

  getPriorities(): string[] {
    return priorityValues.splice(1);
  }

  filterTags(event: any) {
    let query = event.query;

    let filtered: Tag[] = this.tags
      .filter(tag => tag.name.toLowerCase().indexOf(query.toLowerCase()) == 0);

    if (!filtered.length) {
      filtered.push({id: null, name: `${createTagTitle} ${query}`});
    }

    this.filteredTags = filtered;
  }

  selectTag(event: any) {
    const tag: Tag = event;
    
    if (tag.name.includes(createTagTitle)) {
      this.saveTag = true;
      const newTag = {id: null, name: tag.name.split(createTagTitle)[1].trim()};
      
      this.tagService.save(newTag).then(tag => {
        this.ticket.tags.push(tag);
      })
      .finally(() => this.saveTag = false);
    
    } else {
      this.ticket.tags.push(tag);
    }

    this.clearTagInput();
  }

  save(ngForm: NgForm) {
    this.saveTicket = true;
    const formData = new FormData();
    formData.append('title', this.ticket.title);
    formData.append('priority', this.ticket.priority);

    this.ticket.tags.forEach(tag => {
      if (tag.id) { formData.append('tags', tag.id.toString()) }
    });

    this.files.forEach(file => formData.append("files", file));

    this.ticketService.save(formData)
      .finally(() => {
        this.resetForm(ngForm);
        this.saveTicket = false
      });
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.clearTagInput();
    this.clearFileInput();
    this.ticket = new Ticket();
  }

  clearTagInput() {
    this.autoComplete!.inputEL.nativeElement.value = '';
  }

  clearFileInput() {
    this.fileUpload?.clear();
  }

  uploadFiles(event:any) {
    this.files = event.currentFiles;
  }
}