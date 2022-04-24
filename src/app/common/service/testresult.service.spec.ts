import { TestBed } from '@angular/core/testing';

import { TestresultService } from './testresult.service';

describe('TestresultService', () => {
  let service: TestresultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestresultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
