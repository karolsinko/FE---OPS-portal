import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CviceniaStrankaComponent } from './cvicenia-stranka.component';

describe('CviceniaStrankaComponent', () => {
  let component: CviceniaStrankaComponent;
  let fixture: ComponentFixture<CviceniaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CviceniaStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CviceniaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
