import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaFormularQuizBashComponent} from './konzola-formular-quiz-bash.component';

describe('KonzolaFormularQuizBashComponent', () => {
  let component: KonzolaFormularQuizBashComponent;
  let fixture: ComponentFixture<KonzolaFormularQuizBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaFormularQuizBashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularQuizBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
