import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizCStrankaComponent} from './quiz-c-stranka.component';

describe('QuizStrankaComponent', () => {
  let component: QuizCStrankaComponent;
  let fixture: ComponentFixture<QuizCStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizCStrankaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
