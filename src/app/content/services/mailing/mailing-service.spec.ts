import { TestBed } from '@angular/core/testing';

import { MailingService } from './mailing-service';

describe('MailingServiceService', () => {
  let service: MailingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
