import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'ticket-requests', loadChildren: () => import('./ticket-requests/ticket-requests.module').then(m => m.TicketRequestsModule) },
  { path: '', redirectTo: 'ticket-requests', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
