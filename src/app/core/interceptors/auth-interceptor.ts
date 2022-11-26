import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = localStorage.getItem('access_token'); 

      if (!token) {
        return next.handle(req);
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      const _req = req.clone({ headers });

      return next.handle(_req);
    
  }

}
