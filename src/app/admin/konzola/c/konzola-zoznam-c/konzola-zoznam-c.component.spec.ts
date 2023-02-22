import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaZoznamCComponent} from './konzola-zoznam-c.component';

describe('KonzolaZoznamCComponent', () => {
  let component: KonzolaZoznamCComponent;
  let fixture: ComponentFixture<KonzolaZoznamCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaZoznamCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
