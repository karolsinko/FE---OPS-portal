import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizBashComponent} from './quiz-bash.component';

describe('QuizComponent', () => {
  let component: QuizBashComponent;
  let fixture: ComponentFixture<QuizBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
