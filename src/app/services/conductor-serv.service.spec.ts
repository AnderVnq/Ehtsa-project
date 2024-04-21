import { TestBed } from '@angular/core/testing';

import { ConductorServService } from './conductor-serv.service';

describe('ConductorServService', () => {
  let service: ConductorServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConductorServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
