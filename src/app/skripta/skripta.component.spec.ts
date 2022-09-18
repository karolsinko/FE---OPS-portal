import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptaComponent } from './skripta.component';

describe('SkriptaComponent', () => {
  let component: SkriptaComponent;
  let fixture: ComponentFixture<SkriptaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
