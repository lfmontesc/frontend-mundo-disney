import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../../../core/services/movie.service';
import { Movie } from '../../../../core/models/movie.model';

@Component({
  selector: 'app-movies-page',
  imports: [CommonModule],
  templateUrl: './movies-page.html',
  styleUrl: './movies-page.css'
})
export class MoviesPage {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {
    console.log('MoviesPage - Constructor ejecutado');
  }

  ngOnInit(): void {
    console.log('MoviesPage - ngOnInit ejecutado');
    this.loadMovies();
  }

  loadMovies() {
    console.log('MoviesPage - loadMovies ejecutado');
    this.movieService.getMovies().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.movies = data
        console.log('Peliculas descargadas', data);
      },
      error: (err) => console.error('Error al cargar películas', err),
    });
  }

}
