import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../tarea.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent {
  @Input() tarea: Tarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    fechaCreacion: new Date(),
    estado: false
  };
  @Output() guardar = new EventEmitter<Tarea>();

  onSubmit() {
    this.guardar.emit(this.tarea);
  }
}
