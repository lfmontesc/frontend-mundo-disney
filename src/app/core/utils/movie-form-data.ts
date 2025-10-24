export interface MovieFormData {
  titulo: string;
  fechaCreacion: string;
  calificacion: number;
  generoId: number;
  personajesIds: number[];
  imagen: File | null;
}