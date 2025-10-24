import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenreFormData } from '../utils/genre-form-data';


@Injectable({
    providedIn: 'root',
})

export class GenreService {
    private readonly baseUrl = 'http://localhost:9092/api/v1/genre';

    constructor(private http: HttpClient) { }

    /** Crear un Genero */
    createGenre(genre: GenreFormData, file?: File): Observable<any> {
        const formData = new FormData();

        if (file) {
            formData.append('imagen', file);
        }
        formData.append('nombre', genre.nombre);
        return this.http.post(`${this.baseUrl}`, formData);
    }
}