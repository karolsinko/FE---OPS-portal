import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaZoznamSkriptyBashComponent} from './konzola-zoznam-skripty-bash.component';

describe('KonzolaZoznamSkriptyBashComponent', () => {
  let component: KonzolaZoznamSkriptyBashComponent;
  let fixture: ComponentFixture<KonzolaZoznamSkriptyBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaZoznamSkriptyBashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamSkriptyBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
