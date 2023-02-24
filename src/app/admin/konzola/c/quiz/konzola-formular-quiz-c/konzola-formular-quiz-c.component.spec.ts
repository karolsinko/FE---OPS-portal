import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaFormularQuizCComponent} from './konzola-formular-quiz-c.component';

describe('KonzolaFormularQuizComponent', () => {
  let component: KonzolaFormularQuizCComponent;
  let fixture: ComponentFixture<KonzolaFormularQuizCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaFormularQuizCComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularQuizCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
