import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDetailComponent } from './base-detail.component';

describe('BaseDetailComponent', () => {
  let component: BaseDetailComponent;
  let fixture: ComponentFixture<BaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
