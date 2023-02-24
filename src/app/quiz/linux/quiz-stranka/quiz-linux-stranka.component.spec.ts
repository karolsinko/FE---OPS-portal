import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizLinuxStrankaComponent} from './quiz-linux-stranka.component';

describe('QuizStrankaComponent', () => {
  let component: QuizLinuxStrankaComponent;
  let fixture: ComponentFixture<QuizLinuxStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizLinuxStrankaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLinuxStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
