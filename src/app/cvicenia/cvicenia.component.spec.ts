import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviceniaComponent } from './cvicenia.component';

describe('CviceniaComponent', () => {
  let component: CviceniaComponent;
  let fixture: ComponentFixture<CviceniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CviceniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CviceniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
