import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkriptaFormularBashComponent} from './skripta-formular-bash.component';

describe('SkriptaFormularBashComponent', () => {
  let component: SkriptaFormularBashComponent;
  let fixture: ComponentFixture<SkriptaFormularBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaFormularBashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaFormularBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
