import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzolaFormularSkriptyComponent } from './konzola-formular-skripty.component';

describe('KonzolaFormularSkriptyComponent', () => {
  let component: KonzolaFormularSkriptyComponent;
  let fixture: ComponentFixture<KonzolaFormularSkriptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaFormularSkriptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularSkriptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
