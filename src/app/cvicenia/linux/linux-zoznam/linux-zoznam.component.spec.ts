import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxZoznamComponent } from './linux-zoznam.component';

describe('LinuxZoznamComponent', () => {
  let component: LinuxZoznamComponent;
  let fixture: ComponentFixture<LinuxZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
