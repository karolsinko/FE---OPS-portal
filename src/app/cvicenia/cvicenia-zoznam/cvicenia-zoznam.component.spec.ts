import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviceniaZoznamComponent } from './cvicenia-zoznam.component';

describe('CviceniaZoznamComponent', () => {
  let component: CviceniaZoznamComponent;
  let fixture: ComponentFixture<CviceniaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CviceniaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CviceniaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
