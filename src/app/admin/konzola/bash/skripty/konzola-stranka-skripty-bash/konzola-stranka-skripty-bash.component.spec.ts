import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaStrankaSkriptyBashComponent} from './konzola-stranka-skripty-bash.component';

describe('KonzolaStrankaSkriptyBashComponent', () => {
  let component: KonzolaStrankaSkriptyBashComponent;
  let fixture: ComponentFixture<KonzolaStrankaSkriptyBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaStrankaSkriptyBashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaSkriptyBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
