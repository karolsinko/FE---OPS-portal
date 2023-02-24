import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaStrankaQuizCComponent} from './konzola-stranka-quiz-c.component';

describe('KonzolaStrankaQuizComponent', () => {
  let component: KonzolaStrankaQuizCComponent;
  let fixture: ComponentFixture<KonzolaStrankaQuizCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaStrankaQuizCComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaQuizCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
