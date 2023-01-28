import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxStrankaComponent } from './linux-stranka.component';

describe('LinuxStrankaComponent', () => {
  let component: LinuxStrankaComponent;
  let fixture: ComponentFixture<LinuxStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
