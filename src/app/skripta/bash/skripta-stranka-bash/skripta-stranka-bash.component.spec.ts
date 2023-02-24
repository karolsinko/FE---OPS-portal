import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkriptaStrankaBashComponent} from './skripta-stranka-bash.component';

describe('SkriptaStrankaBashComponent', () => {
  let component: SkriptaStrankaBashComponent;
  let fixture: ComponentFixture<SkriptaStrankaBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkriptaStrankaBashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaStrankaBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
