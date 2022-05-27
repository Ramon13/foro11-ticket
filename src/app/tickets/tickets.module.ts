import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { TicketsHeaderComponent } from './tickets-header/tickets-header.component';
import { TicketsListComponent } from './tickets-list/tickets-list.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketsHeaderComponent,
    TicketsListComponent
  ],
  imports: [
	CommonModule,
    TicketsRoutingModule
  ]
})
export class TicketRequestsModule { }
