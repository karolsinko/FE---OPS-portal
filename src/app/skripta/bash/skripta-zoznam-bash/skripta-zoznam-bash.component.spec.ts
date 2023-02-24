import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkriptaZoznamBashComponent} from './skripta-zoznam-bash.component';

describe('SkriptaZoznamBashComponent', () => {
  let component: SkriptaZoznamBashComponent;
  let fixture: ComponentFixture<SkriptaZoznamBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkriptaZoznamBashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaZoznamBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
