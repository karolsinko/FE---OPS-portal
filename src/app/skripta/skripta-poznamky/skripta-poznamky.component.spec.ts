import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkriptaPoznamkyComponent } from './skripta-poznamky.component';

describe('SkriptaPoznamkyComponent', () => {
  let component: SkriptaPoznamkyComponent;
  let fixture: ComponentFixture<SkriptaPoznamkyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaPoznamkyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaPoznamkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
