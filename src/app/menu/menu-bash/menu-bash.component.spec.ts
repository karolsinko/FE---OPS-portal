import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuBashComponent} from './menu-bash.component';

describe('MenuBashComponent', () => {
  let component: MenuBashComponent;
  let fixture: ComponentFixture<MenuBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
