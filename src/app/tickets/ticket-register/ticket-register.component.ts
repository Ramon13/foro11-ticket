import { Component, OnInit, Inject } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormBuilder, Validators } from '@angular/forms';
import { PRIORITIES, AUDITORSHIPS } from '../../tickets';

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
    ]]
  });

  editorConfig: AngularEditorConfig = {
    editable: true,
    minHeight: '100'
  }
  
  priorityList = PRIORITIES;
  auditorshipList = AUDITORSHIPS;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }
}
