import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { AuthorizedComponent } from './authorized/authorized.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    AuthorizedComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
  ]
})
export class SecurityModule { }
