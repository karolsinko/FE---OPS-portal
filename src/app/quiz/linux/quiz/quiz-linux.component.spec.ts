import {ComponentFixture, TestBed} from '@angular/core/testing';

import {QuizLinuxComponent} from './quiz-linux.component';

describe('QuizZoznamComponent', () => {
  let component: QuizLinuxComponent;
  let fixture: ComponentFixture<QuizLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
