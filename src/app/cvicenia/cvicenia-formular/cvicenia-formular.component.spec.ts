import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviceniaFormularComponent } from './cvicenia-formular.component';

describe('CviceniaFormularComponent', () => {
  let component: CviceniaFormularComponent;
  let fixture: ComponentFixture<CviceniaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CviceniaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CviceniaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
