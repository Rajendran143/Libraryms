import { TestBed } from '@angular/core/testing';

import { AuthguaredGuard } from './authguared.guard';

describe('AuthguaredGuard', () => {
  let guard: AuthguaredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguaredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
