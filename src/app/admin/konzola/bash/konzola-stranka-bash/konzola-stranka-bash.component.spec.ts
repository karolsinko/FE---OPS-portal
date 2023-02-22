import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KonzolaStrankaBashComponent} from './konzola-stranka-bash.component';

describe('KonzolaStrankaBashComponent', () => {
  let component: KonzolaStrankaBashComponent;
  let fixture: ComponentFixture<KonzolaStrankaBashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonzolaStrankaBashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonzolaStrankaBashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
