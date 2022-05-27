import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketRequestsModule) },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' }
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