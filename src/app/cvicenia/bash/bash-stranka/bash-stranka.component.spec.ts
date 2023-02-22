import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BashStrankaComponent} from './bash-stranka.component';

describe('BashStrankaComponent', () => {
  let component: BashStrankaComponent;
  let fixture: ComponentFixture<BashStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BashStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BashStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
