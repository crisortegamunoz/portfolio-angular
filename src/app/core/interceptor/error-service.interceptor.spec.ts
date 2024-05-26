import { TestBed } from '@angular/core/testing';

import { ErrorServiceInterceptor } from './error-service.interceptor';

describe('ErrorServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorServiceInterceptor = TestBed.inject(ErrorServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
