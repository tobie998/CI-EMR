import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTabComponent } from './message-tab.component';

describe('MessageTabComponent', () => {
  let component: MessageTabComponent;
  let fixture: ComponentFixture<MessageTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
