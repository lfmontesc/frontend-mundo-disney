import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditPage } from './movie-edit-page';

describe('MovieEditPage', () => {
  let component: MovieEditPage;
  let fixture: ComponentFixture<MovieEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieEditPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
