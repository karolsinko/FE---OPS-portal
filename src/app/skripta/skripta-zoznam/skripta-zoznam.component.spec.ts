import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptaZoznamComponent } from './skripta-zoznam.component';

describe('SkriptaZoznamComponent', () => {
  let component: SkriptaZoznamComponent;
  let fixture: ComponentFixture<SkriptaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
