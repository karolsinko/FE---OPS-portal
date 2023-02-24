import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaFormularSkriptyCComponent} from './konzola-formular-skripty-c.component';

describe('KonzolaFormularSkriptyCComponent', () => {
  let component: KonzolaFormularSkriptyCComponent;
  let fixture: ComponentFixture<KonzolaFormularSkriptyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaFormularSkriptyCComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularSkriptyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
