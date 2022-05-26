import { NgModule } from '@angular/core';
import { TicketRequestsRoutingModule } from './ticket-requests-routing.module';
import { TicketRequestsComponent } from './ticket-requests.component';

@NgModule({
  declarations: [
    TicketRequestsComponent
  ],
  imports: [
    TicketRequestsRoutingModule
  ]
})
export class TicketRequestsModule { }
