import { TestBed } from '@angular/core/testing';

import { ClinicaltablesService } from './clinicaltables.service';

describe('ClinicaltablesService', () => {
  let service: ClinicaltablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicaltablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
