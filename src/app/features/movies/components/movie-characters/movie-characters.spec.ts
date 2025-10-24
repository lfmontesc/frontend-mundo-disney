import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCharacters } from './movie-characters';

describe('MovieCharacters', () => {
  let component: MovieCharacters;
  let fixture: ComponentFixture<MovieCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCharacters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCharacters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
