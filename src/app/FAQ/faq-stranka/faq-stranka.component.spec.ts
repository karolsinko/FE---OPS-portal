import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FAQStrankaComponent} from './faq-stranka.component';

describe('FAQStrankaComponent', () => {
  let component: FAQStrankaComponent;
  let fixture: ComponentFixture<FAQStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
