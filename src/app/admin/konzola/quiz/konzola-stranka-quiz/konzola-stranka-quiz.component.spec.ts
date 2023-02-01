import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzolaStrankaQuizComponent } from './konzola-stranka-quiz.component';

describe('KonzolaStrankaQuizComponent', () => {
  let component: KonzolaStrankaQuizComponent;
  let fixture: ComponentFixture<KonzolaStrankaQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaStrankaQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
