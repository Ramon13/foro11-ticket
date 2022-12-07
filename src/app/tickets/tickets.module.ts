import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AngularEditorModule } from '@kolkov/angular-editor'; 
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ListboxModule } from 'primeng/listbox';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { EditorModule } from 'primeng/editor';
import { FileUploadModule } from 'primeng/fileupload';
import { PanelModule } from 'primeng/panel'; 
import { AvatarModule } from 'primeng/avatar';

import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketRegisterComponent } from './ticket-register/ticket-register.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    TicketDetailComponent,
    TicketRegisterComponent,
    TicketListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
	  FormsModule,
    HttpClientModule,
    AngularEditorModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ListboxModule,
    AutoCompleteModule,
    DividerModule,
    CardModule,
    ChipModule,
    TagModule,
    ButtonModule,
    SkeletonModule,
    MenubarModule,
    DropdownModule,
    PaginatorModule,
    SplitButtonModule,
    ProgressSpinnerModule,
    EditorModule,
    FileUploadModule,
    PanelModule,
    AvatarModule,
    InputTextModule,
    SplitButtonModule
  ]
})
export class TicketRequestsModule { }
