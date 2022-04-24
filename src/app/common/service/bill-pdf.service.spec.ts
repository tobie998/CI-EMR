import { TestBed } from '@angular/core/testing';

import { BillPdfService } from './bill-pdf.service';

describe('BillPdfService', () => {
  let service: BillPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
