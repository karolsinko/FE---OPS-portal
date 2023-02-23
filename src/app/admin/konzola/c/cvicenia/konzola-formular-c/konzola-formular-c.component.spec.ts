import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaFormularCComponent} from './konzola-formular-c.component';

describe('KonzolaFormularCComponent', () => {
  let component: KonzolaFormularCComponent;
  let fixture: ComponentFixture<KonzolaFormularCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaFormularCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
