import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaComponent} from './konzola.component';

describe('KonzolaComponent', () => {
  let component: KonzolaComponent;
  let fixture: ComponentFixture<KonzolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
