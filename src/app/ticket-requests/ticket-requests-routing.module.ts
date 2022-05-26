import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketRequestsComponent } from './ticket-requests.component';

const routes: Routes = [{ path: '', component: TicketRequestsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRequestsRoutingModule { }
