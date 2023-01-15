import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizZoznamComponent } from './quiz-zoznam.component';

describe('QuizZoznamComponent', () => {
  let component: QuizZoznamComponent;
  let fixture: ComponentFixture<QuizZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
