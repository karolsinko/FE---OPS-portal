import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaStrankaSkriptyCComponent} from './konzola-stranka-skripty-c.component';

describe('KonzolaStrankaSkriptyCComponent', () => {
  let component: KonzolaStrankaSkriptyCComponent;
  let fixture: ComponentFixture<KonzolaStrankaSkriptyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaStrankaSkriptyCComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaSkriptyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
