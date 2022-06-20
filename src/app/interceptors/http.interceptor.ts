import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Injectable()
export class InterceptedHttp implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = req.url;
        let _req: HttpRequest<any>;

        _req = req.clone({ url: environment.api_url + url });

        // send cloned request to the next handler.
        return next.handle(_req)
            .pipe(
                map((event: HttpEvent<any>) => {
                    /* if (event instanceof HttpResponse) {
                        console.log('HttpResponse >>', event);
                    } */
                    return event;
                }),
                catchError((err: HttpErrorResponse) => {
                    if (err.status == 200) {
                        return of(new HttpResponse({ status: 200, body: err }));
                    }

                    console.log('error :', err);
                    

                    if (err && err.hasOwnProperty('error')) {
                        Swal.fire({
                            title: err.error.message,
                            toast: true,
                            position: 'top-end',
                            timer: 8000,
                            icon: 'error',
                            timerProgressBar: true,
                            showConfirmButton: false,
                            showCloseButton: true
                        });
                    }
                    return throwError(err);
                }));
    }
}
