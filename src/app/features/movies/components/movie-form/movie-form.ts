import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-movie-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {
}
