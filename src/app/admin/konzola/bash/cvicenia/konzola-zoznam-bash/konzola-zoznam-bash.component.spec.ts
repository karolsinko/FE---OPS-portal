import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaZoznamBashComponent} from './konzola-zoznam-bash.component';

describe('KonzolaZoznamBashComponent', () => {
  let component: KonzolaZoznamBashComponent;
  let fixture: ComponentFixture<KonzolaZoznamBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KonzolaZoznamBashComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaZoznamBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
