import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaZoznamSkriptyComponent} from './konzola-zoznam-skripty.component';

describe('KonzolaZoznamSkriptyComponent', () => {
  let component: KonzolaZoznamSkriptyComponent;
  let fixture: ComponentFixture<KonzolaZoznamSkriptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaZoznamSkriptyComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamSkriptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
