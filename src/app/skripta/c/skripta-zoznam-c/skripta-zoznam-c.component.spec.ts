import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptaZoznamCComponent } from './skripta-zoznam-c.component';

describe('SkriptaZoznamCComponent', () => {
  let component: SkriptaZoznamCComponent;
  let fixture: ComponentFixture<SkriptaZoznamCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaZoznamCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaZoznamCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
