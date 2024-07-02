import { Component } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaFormComponent } from '../tarea-form/tarea-form.component';

@Component({
  selector: 'app-tarea-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TareaFormComponent],
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent {
  tareas: Tarea[] = [];
  tareaSeleccionada: Tarea | null = null;

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.tareas = this.tareaService.obtenerTareas();
  }

  seleccionarTarea(tarea: Tarea) {
    this.tareaSeleccionada = { ...tarea };
  }

  guardarTarea(tarea: Tarea) {
    if (tarea.id === 0) {
      tarea.id = this.tareas.length + 1;
      this.tareaService.agregarTarea(tarea);
    } else {
      this.tareaService.actualizarTarea(tarea);
    }
    this.tareaSeleccionada = null;
    this.tareas = this.tareaService.obtenerTareas();
  }

  eliminarTarea(id: number) {
    this.tareaService.eliminarTarea(id);
    this.tareas = this.tareaService.obtenerTareas();
  }
}
