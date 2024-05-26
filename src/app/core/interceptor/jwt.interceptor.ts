import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const apiKey = 'cb0e1c35-e2eb-475b-a288-896f0f348d9d';
    request = request.clone({
      setHeaders: {
        'x-api-key': apiKey
      }
    });
    
    return next.handle(request);
  }
}
