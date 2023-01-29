import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzolaZoznamComponent } from './konzola-zoznam.component';

describe('KonzolaZoznamComponent', () => {
  let component: KonzolaZoznamComponent;
  let fixture: ComponentFixture<KonzolaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
