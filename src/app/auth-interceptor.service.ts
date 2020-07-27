import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from "@angular/common/http";
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('request handling........');
        const modifiedReq = req.clone({headers: req.headers.append('AuthHeader', 'Tokexyzqwqqq')});
        // return next.handle(req);
        // return next.handle(modifiedReq); // modify request url

        // get response in inteceptor
        return next.handle(modifiedReq)
        // .pipe(tap(event => {
        //     console.log(event);
        //     if(event.type === HttpEventType.Response){
        //         console.log('response interceptor', event.body);
        //     }
        // }))

    }
}