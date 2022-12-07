import { Routes } from "@angular/router";
import { AuthorizedComponent } from "../security/authorized/authorized.component";
import { LoginComponent } from "../security/login/login.component";
import { TicketDetailComponent } from "../tickets/ticket-detail/ticket-detail.component";
import { TicketListComponent } from "../tickets/ticket-list/ticket-list.component";
import { TicketRegisterComponent } from "../tickets/ticket-register/ticket-register.component";

export const ROUTES: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full' },
    {path: 'tickets', component: TicketListComponent},
    {path: 'tickets/:id', component: TicketDetailComponent},
    {path: 'register', component: TicketRegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'authorized', component: AuthorizedComponent}
];