import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CStrankaComponent} from './c-stranka.component';

describe('CStrankaComponent', () => {
  let component: CStrankaComponent;
  let fixture: ComponentFixture<CStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
