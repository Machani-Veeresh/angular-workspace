import { TestBed } from '@angular/core/testing';

import { YourGaurdGuard } from './your-gaurd.guard';

describe('YourGaurdGuard', () => {
  let guard: YourGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YourGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
