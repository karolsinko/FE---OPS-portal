import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaZoznamSkriptyCComponent} from './konzola-zoznam-skripty-c.component';

describe('KonzolaZoznamSkriptyCComponent', () => {
  let component: KonzolaZoznamSkriptyCComponent;
  let fixture: ComponentFixture<KonzolaZoznamSkriptyCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaZoznamSkriptyCComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamSkriptyCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
