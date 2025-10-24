import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { MovieFormData } from '../utils/movie-form-data';
import { Movie } from '../models/movie.model';

@Injectable({
    providedIn: 'root',
})

export class MovieService {
    private readonly baseUrl = '/api/v1/movies';

    constructor(private http: HttpClient) { }

    /** Obtener todas las películas */
    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${this.baseUrl}`);
    }
    
    /** Crear una nueva película */
    createMovie(movie: MovieFormData, file?: File): Observable<any> {
        const formData = new FormData();

        if (file) {
            formData.append('imagen', file);
        }

        formData.append('titulo', movie.titulo);
        formData.append('fechaCreacion', movie.fechaCreacion);
        formData.append('calificacion', movie.calificacion.toString());
        formData.append('generoId', movie.generoId.toString());

        movie.personajesIds.forEach((id) =>
            formData.append('personajesIds', id.toString())
        );

        return this.http.post(`${this.baseUrl}`, formData);
    }
}