import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFormularComponent } from './quiz-formular.component';

describe('QuizFormularComponent', () => {
  let component: QuizFormularComponent;
  let fixture: ComponentFixture<QuizFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
