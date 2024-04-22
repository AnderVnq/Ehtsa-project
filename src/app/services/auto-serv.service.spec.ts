import { TestBed } from '@angular/core/testing';

import { AutoServService } from './auto-serv.service';

describe('AutoServService', () => {
  let service: AutoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
