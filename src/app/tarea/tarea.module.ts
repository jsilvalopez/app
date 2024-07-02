import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TareaFormComponent } from './tarea-form/tarea-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TareaListComponent,
    TareaFormComponent
  ],
  exports: [
    TareaListComponent
  ]
})
export class TareaModule {}
