import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpStatusCode, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorServiceInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (HttpStatusCode.Unauthorized === error.status) {
          // No autorizado
        } else if (HttpStatusCode.Forbidden === error.status) { 
          // Prohibido
        } else if (HttpStatusCode.NotFound === error.status) {
          // No encontrado
        } else if (HttpStatusCode.InternalServerError || HttpStatusCode.GatewayTimeout) {
          // Errores desde el servidor
        }
        return throwError(error);
      })
    );
  }
}
