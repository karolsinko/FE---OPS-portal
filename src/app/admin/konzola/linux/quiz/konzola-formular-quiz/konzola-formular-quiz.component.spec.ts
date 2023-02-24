import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaFormularQuizComponent} from './konzola-formular-quiz.component';

describe('KonzolaFormularQuizComponent', () => {
  let component: KonzolaFormularQuizComponent;
  let fixture: ComponentFixture<KonzolaFormularQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaFormularQuizComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
