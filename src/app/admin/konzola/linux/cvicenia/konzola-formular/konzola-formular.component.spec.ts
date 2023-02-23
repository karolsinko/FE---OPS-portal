import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaFormularComponent} from './konzola-formular.component';

describe('KonzolaFormularComponent', () => {
  let component: KonzolaFormularComponent;
  let fixture: ComponentFixture<KonzolaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
