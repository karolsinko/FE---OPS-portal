import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizBashStrankaComponent} from './quiz-bash-stranka.component';

describe('QuizStrankaComponent', () => {
  let component: QuizBashStrankaComponent;
  let fixture: ComponentFixture<QuizBashStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBashStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBashStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
