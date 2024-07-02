import { Injectable } from '@angular/core';
import { Tarea } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private tareas: Tarea[] = [];

  constructor() { }

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  actualizarTarea(tarea: Tarea) {
    const index = this.tareas.findIndex(t => t.id === tarea.id);
    if (index !== -1) {
      this.tareas[index] = tarea;
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}
