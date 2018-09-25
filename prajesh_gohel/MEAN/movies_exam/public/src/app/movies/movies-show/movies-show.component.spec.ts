import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesShowComponent } from './movies-show.component';

describe('MoviesShowComponent', () => {
  let component: MoviesShowComponent;
  let fixture: ComponentFixture<MoviesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
