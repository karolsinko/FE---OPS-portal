import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkriptaFormularCComponent} from './skripta-formular-c.component';

describe('SkriptaFormularCComponent', () => {
  let component: SkriptaFormularCComponent;
  let fixture: ComponentFixture<SkriptaFormularCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaFormularCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaFormularCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
