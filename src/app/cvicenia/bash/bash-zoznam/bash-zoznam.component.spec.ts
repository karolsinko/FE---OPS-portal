import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BashZoznamComponent} from './bash-zoznam.component';

describe('BashZoznamComponent', () => {
  let component: BashZoznamComponent;
  let fixture: ComponentFixture<BashZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BashZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BashZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
