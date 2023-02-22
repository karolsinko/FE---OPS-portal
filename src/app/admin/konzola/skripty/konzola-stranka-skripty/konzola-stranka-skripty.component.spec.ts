import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaStrankaSkriptyComponent} from './konzola-stranka-skripty.component';

describe('KonzolaStrankaSkriptyComponent', () => {
  let component: KonzolaStrankaSkriptyComponent;
  let fixture: ComponentFixture<KonzolaStrankaSkriptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaStrankaSkriptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaSkriptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
