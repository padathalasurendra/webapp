import { TestBed, inject } from '@angular/core/testing';

import { FirstserviveService } from './firstservive.service';

describe('FirstserviveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirstserviveService]
    });
  });

  it('should be created', inject([FirstserviveService], (service: FirstserviveService) => {
    expect(service).toBeTruthy();
  }));
});
