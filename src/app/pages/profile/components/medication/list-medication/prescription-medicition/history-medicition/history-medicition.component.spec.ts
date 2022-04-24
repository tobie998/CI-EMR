import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMedicitionComponent } from './history-medicition.component';

describe('HistoryMedicitionComponent', () => {
  let component: HistoryMedicitionComponent;
  let fixture: ComponentFixture<HistoryMedicitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryMedicitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryMedicitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
