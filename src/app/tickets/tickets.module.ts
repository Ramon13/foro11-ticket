import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketRegisterComponent } from './ticket-register/ticket-register.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    TicketDetailComponent,
    TicketRegisterComponent,
    TicketListComponent
  ],
  imports: [
    CommonModule,
	  FormsModule,
    TicketsRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ListboxModule,
    SplitButtonModule,
    AutoCompleteModule,
    DividerModule,
    CardModule,
    ChipModule,
    TagModule,
    ButtonModule
  ]
})
export class TicketRequestsModule { }
