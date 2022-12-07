import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { baseURL } from './shared/baseURL';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TicketRequestsModule } from './tickets/tickets.module';
import { SecurityModule } from './security/security.module';

//enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    AppRoutingModule,
    TicketRequestsModule,
    SecurityModule,
    BrowserModule,
    HttpClientModule,
    SidebarModule,
    ToggleButtonModule
  ],
  providers: [
    { provide: 'baseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
