/*
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

//TODO: need to create LoadingSpinnerService and it's component
@Injectable()
export class LoadingSpinnerInterceptor implements HttpInterceptor {
    constructor(public loadingSpinnerService: LoadingSpinnerService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingSpinnerService.show();

        request = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': window.location.origin
            }
        });

        return next.handle(request).pipe(
            finalize(() => this.loadingSpinnerService.hide())
        );
    }
}
*/