import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaZoznamQuizCComponent} from './konzola-zoznam-quiz-c.component';

describe('KonzolaZoznamQuizComponent', () => {
  let component: KonzolaZoznamQuizCComponent;
  let fixture: ComponentFixture<KonzolaZoznamQuizCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaZoznamQuizCComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamQuizCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
