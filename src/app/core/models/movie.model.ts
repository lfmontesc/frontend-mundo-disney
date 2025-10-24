export interface Movie {
  id?: number;
  imagenUrl?: string;
  titulo: string;
  fechaCreacion: string;
  calificacion: number;
  generoId: number;
  personajesIds: number[];
}