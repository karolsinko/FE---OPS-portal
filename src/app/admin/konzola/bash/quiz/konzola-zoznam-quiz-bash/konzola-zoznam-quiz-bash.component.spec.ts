import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaZoznamQuizBashComponent} from './konzola-zoznam-quiz-bash.component';

describe('KonzolaZoznamQuizBashComponent', () => {
  let component: KonzolaZoznamQuizBashComponent;
  let fixture: ComponentFixture<KonzolaZoznamQuizBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaZoznamQuizBashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamQuizBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
