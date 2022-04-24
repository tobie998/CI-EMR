import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSystemComponent } from './review-system.component';

describe('ReviewSystemComponent', () => {
  let component: ReviewSystemComponent;
  let fixture: ComponentFixture<ReviewSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
