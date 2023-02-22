import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaStrankaCComponent} from './konzola-stranka-c.component';

describe('KonzolaStrankaCComponent', () => {
  let component: KonzolaStrankaCComponent;
  let fixture: ComponentFixture<KonzolaStrankaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaStrankaCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
