import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CZoznamComponent} from './c-zoznam.component';

describe('CZoznamComponent', () => {
  let component: CZoznamComponent;
  let fixture: ComponentFixture<CZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
