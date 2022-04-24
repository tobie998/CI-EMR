import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionMedicitionComponent } from './prescription-medicition.component';

describe('PrescriptionMedicitionComponent', () => {
  let component: PrescriptionMedicitionComponent;
  let fixture: ComponentFixture<PrescriptionMedicitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionMedicitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionMedicitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
