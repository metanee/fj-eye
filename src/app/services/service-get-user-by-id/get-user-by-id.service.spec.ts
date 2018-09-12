import { TestBed, inject } from '@angular/core/testing';

import { GetUserByIdService } from './get-user-by-id.service';

describe('GetUserByIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetUserByIdService]
    });
  });

  it('should be created', inject([GetUserByIdService], (service: GetUserByIdService) => {
    expect(service).toBeTruthy();
  }));
});
