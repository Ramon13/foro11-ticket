import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsService } from '../../tickets.service';
import { TagsService } from '../../tags.service';

import { 
  PRIORITIES, 
  AUDITORSHIPS, 
  Tag,
  STATUS, 
  ITicket
} from '../../tickets';

@Component({
  selector: 'app-ticket-register',
  templateUrl: './ticket-register.component.html',
  styleUrls: ['./ticket-register.component.css']
})
export class TicketRegisterComponent implements OnInit {
  
  ticketForm = this.fb.group({
    title: ["", [
      Validators.minLength(4),
      Validators.maxLength(32),
      Validators.required
    ]],
    description: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    priority: ["", [
      Validators.required
    ]],
    auditorship: ["", [
      Validators.required
    ]],
    place: ["", [
     Validators.required  
    ]]
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    minHeight: '100'
  }
  
  priorityList = PRIORITIES;
  auditorshipList = AUDITORSHIPS;
  
  tags: Tag[] = [];
  filteredTags: Tag[] = [];
  selectedTags: Set<Tag> = new Set();

  constructor(
    private fb: FormBuilder,
    private ticketsService: TicketsService,
    private tagService: TagsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.tagService.getAll()
      .subscribe(tags => this.tags = tags);
  }
  
  selectTag(tag: Tag) {
    this.selectedTags.add(tag);
  }
  
  removeTag(selectedTag: Tag) {
    this.selectedTags.delete(selectedTag);
  }
  
  filterTags(key: string) {
    this.filteredTags.length = 0;
    key = key.toUpperCase();
    
    for (let tag of this.tags) {
      if (key) {
        if (tag.name.toUpperCase().indexOf(key) > -1) {
          this.filteredTags.push(tag);
        }
      }
    }
  }
  
  registerTicket() {
    
    console.log(this.getSelectedTags());
    
    const ticket: ITicket = {
      title: this.getTitle(),
      priority: { name: this.getPriority() },
      tags: Array.from(this.selectedTags),
      comments: [
        {
          message: this.getDescription(),
          createdBy: {name: "loggedUser"}
        }
      ]
    }
    
    
    this.ticketsService.addTicket(ticket)
        .subscribe(() => this.goBack());
  }
  
  getSelectedTags() {
    return JSON.stringify(Array.from(this.selectedTags));
  }
  
  getTitle() {
    return this.ticketForm.get('title')?.value;
  }
  
  getDescription() {
    return this.ticketForm.get('description')?.value;
  }
  
  getPlace() {
    return this.ticketForm.get('place')?.value;
  }
  
  getPriority() {
    return this.ticketForm.get('priority')?.value;
  }
  
  getAuditorship() {
    return this.ticketForm.get('auditorship')?.value;
  }
  
  goBack(): void {
    this.location.back();
  }
}
