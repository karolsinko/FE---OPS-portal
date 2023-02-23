import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SkriptaStrankaComponent} from './skripta-stranka.component';

describe('SkriptaStrankaComponent', () => {
  let component: SkriptaStrankaComponent;
  let fixture: ComponentFixture<SkriptaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkriptaStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkriptaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
