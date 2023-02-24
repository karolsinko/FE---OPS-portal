import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaFormularSkriptyBashComponent} from './konzola-formular-skripty-bash.component';

describe('KonzolaFormularSkriptyBashComponent', () => {
  let component: KonzolaFormularSkriptyBashComponent;
  let fixture: ComponentFixture<KonzolaFormularSkriptyBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaFormularSkriptyBashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularSkriptyBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
