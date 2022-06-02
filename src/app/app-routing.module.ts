import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [ 
  { path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketRequestsModule) },
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tags', loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule) },
  { path: '**', component: NotFoundComponent }
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