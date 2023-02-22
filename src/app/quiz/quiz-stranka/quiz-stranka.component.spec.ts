import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizStrankaComponent} from './quiz-stranka.component';

describe('QuizStrankaComponent', () => {
  let component: QuizStrankaComponent;
  let fixture: ComponentFixture<QuizStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
