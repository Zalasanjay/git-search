
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptedHttp } from './http.interceptor';

export const httpInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: InterceptedHttp, multi: true }];

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
    ],
    providers: [httpInterceptorProviders],
    exports: [HttpClientModule]
})
export class HttpInterceptorModule { }
