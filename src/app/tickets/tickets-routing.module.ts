import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketRegisterComponent } from './ticket-register/ticket-register.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
 
const routes: Routes = [
  { path: '', component: TicketRegisterComponent },
  { path: 'register', component: TicketRegisterComponent },
  { path: ':id', component: TicketDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
