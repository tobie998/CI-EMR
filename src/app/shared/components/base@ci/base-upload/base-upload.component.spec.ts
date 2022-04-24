import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUploadComponent } from './base-upload.component';

describe('BaseUploadComponent', () => {
  let component: BaseUploadComponent;
  let fixture: ComponentFixture<BaseUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
