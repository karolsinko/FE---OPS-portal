import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BashFormularComponent } from './bash-formular.component';

describe('BashFormularComponent', () => {
  let component: BashFormularComponent;
  let fixture: ComponentFixture<BashFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BashFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BashFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
