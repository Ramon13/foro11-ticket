import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketsService } from '../../tickets.service';
import { 
  PRIORITIES, 
  AUDITORSHIPS, 
  TAGS,
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
  
  filterTagKey: string = '';
  filteredTags: string[] = [];
  selectedTags: Set<string> = new Set();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ticketsService: TicketsService
  ) { }

  ngOnInit(): void {
    
  }
  
  selectTag(tagName: string) {
    this.selectedTags.add(tagName);
  }
  
  removeTag(selectedTag: string) {
    this.selectedTags.delete(selectedTag);
  }
  
  filterTags(key: string) {
    this.filteredTags.length = 0;
    key = key.toUpperCase();
    
    for (let tag of TAGS) {
      if (key) {
        if (tag.toUpperCase().indexOf(key) > -1) {
          this.filteredTags.push(tag);
        }
      }
    }
  }
  
  registerTicket() {
    const ticket: ITicket = {
      id: this.ticketsService.countTickets() + 1,
      title: this.getTitle(),
      user: "John Doe",
      createdAt: new Date(),
      tags: Array.from(this.selectedTags),
      status: STATUS.open,
      priority: this.getPriority(),
      comments: [
        {
          message: this.getDescription(),
          user: "John Doe",
          createdAt: new Date()
        }
      ]
    }
    
    this.ticketsService.addTicket(ticket);
    this.router.navigate(['/tickets']);
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
}
