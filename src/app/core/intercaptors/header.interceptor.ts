import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const modifiedReq = request.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': token ? token : '',
      }),
    });
    return next.handle(modifiedReq);
  }
}
