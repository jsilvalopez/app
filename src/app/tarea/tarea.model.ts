export interface Tarea {
    id: number;
    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    estado: boolean; // true para completado, false para pendiente
  }