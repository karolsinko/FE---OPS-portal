import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzolaZoznamQuizComponent } from './konzola-zoznam-quiz.component';

describe('KonzolaZoznamQuizComponent', () => {
  let component: KonzolaZoznamQuizComponent;
  let fixture: ComponentFixture<KonzolaZoznamQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaZoznamQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
