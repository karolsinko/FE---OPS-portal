import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptaFormularComponent } from './skripta-formular.component';

describe('SkriptaFormularComponent', () => {
  let component: SkriptaFormularComponent;
  let fixture: ComponentFixture<SkriptaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
