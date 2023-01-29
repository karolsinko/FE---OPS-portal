import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonzolaFormularBashComponent } from './konzola-formular-bash.component';

describe('KonzolaFormularBashComponent', () => {
  let component: KonzolaFormularBashComponent;
  let fixture: ComponentFixture<KonzolaFormularBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaFormularBashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
