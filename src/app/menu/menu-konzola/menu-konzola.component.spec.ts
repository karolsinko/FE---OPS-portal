import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuKonzolaComponent} from './menu-konzola.component';

describe('MenuKonzolaComponent', () => {
  let component: MenuKonzolaComponent;
  let fixture: ComponentFixture<MenuKonzolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuKonzolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuKonzolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
