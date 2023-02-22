import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LinuxFormularComponent} from './linux-formular.component';

describe('LinuxFormularComponent', () => {
  let component: LinuxFormularComponent;
  let fixture: ComponentFixture<LinuxFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
