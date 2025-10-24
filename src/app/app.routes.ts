import { Routes } from '@angular/router';
import { MoviesPage } from './features/movies/pages/movies-page/movies-page';
import { MovieEditPage } from './features/movies/pages/movie-edit-page/movie-edit-page';
import { MovieDetailPage } from './features/movies/pages/movie-detail-page/movie-detail-page';


export const routes: Routes = [
    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'movies', component: MoviesPage },
    { path: 'movies/new', component: MovieEditPage },
    { path: 'movies/edit/:id', component: MovieEditPage },
    { path: 'movies/detail/:id', component: MovieDetailPage },
    { path: '**', redirectTo: 'movies' },
];
