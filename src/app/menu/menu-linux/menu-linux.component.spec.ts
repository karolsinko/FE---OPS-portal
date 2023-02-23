import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLinuxComponent } from './menu-linux.component';

describe('MenuLinuxComponent', () => {
  let component: MenuLinuxComponent;
  let fixture: ComponentFixture<MenuLinuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuLinuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLinuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
