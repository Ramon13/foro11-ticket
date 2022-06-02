import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { TagSelectorComponent } from './tag-selector/tag-selector.component';


@NgModule({
  declarations: [
    TagsComponent,
    TagSelectorComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule
  ],
  exports: [
    TagSelectorComponent
  ]
})
export class TagsModule { }
