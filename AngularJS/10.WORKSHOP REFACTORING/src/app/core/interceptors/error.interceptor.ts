import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {  ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private toastr: ToastrService,
        private router: Router
    ) {  }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req)
            .pipe(
                catchError((err: HttpErrorResponse) => {
                    if(err.status === 401) {
                        this.toastr.error(err.error.description, 'Error!');
                        this.router.navigate(['/login']);
                    }
                    return throwError(err);
                })
            )
    }
}