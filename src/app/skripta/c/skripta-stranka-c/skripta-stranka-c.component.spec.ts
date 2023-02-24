import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkriptaStrankaCComponent} from './skripta-stranka-c.component';

describe('SkriptaStrankaCComponent', () => {
  let component: SkriptaStrankaCComponent;
  let fixture: ComponentFixture<SkriptaStrankaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkriptaStrankaCComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaStrankaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
