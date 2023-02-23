import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaStrankaQuizBashComponent} from './konzola-stranka-quiz-bash.component';

describe('KonzolaStrankaQuizBashComponent', () => {
  let component: KonzolaStrankaQuizBashComponent;
  let fixture: ComponentFixture<KonzolaStrankaQuizBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaStrankaQuizBashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaQuizBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
