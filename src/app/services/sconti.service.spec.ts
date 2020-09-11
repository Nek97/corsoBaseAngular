import { TestBed } from '@angular/core/testing';

import { ScontiService } from './sconti.service';

describe('ScontiService', () => {
  let service: ScontiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScontiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
