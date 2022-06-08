import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import { ReactiveFormsModule } from '@angular/forms';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketsHeaderComponent } from './tickets-header/tickets-header.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketRegisterComponent } from './ticket-register/ticket-register.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketsHeaderComponent,
    TicketsListComponent,
    TicketDetailComponent,
    TicketRegisterComponent
  ],
  imports: [
    CommonModule,
	FormsModule,
    TicketsRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule,
  ]
})
export class TicketRequestsModule { }
