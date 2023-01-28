import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFormularComponent } from './c-formular.component';

describe('CFormularComponent', () => {
  let component: CFormularComponent;
  let fixture: ComponentFixture<CFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
