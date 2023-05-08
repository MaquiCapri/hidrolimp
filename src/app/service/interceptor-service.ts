import { Observable } from "rxjs";
import { TokenService } from "./token.service";
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

//el interceptor pregunta si el token es valido. si no es valido te pide que te vuelvas a loguear
//lo hice en yo programo 15. proyecto final
@Injectable({
providedIn: 'root'
})
export class InterceptorService {
    
    constructor(private tokenService:TokenService){}

    intercept(req:HttpRequest<any>,next: HttpHandler):Observable<HttpEvent<any>>{
       let intReq = req;
       const token = this.tokenService.getToken();
       if(token !=null){
        intReq = req.clone({
            headers: req.headers.set('Authorization','Bearer' + token)
        });
       } 
       return next.handle(intReq);
    }

}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true}];
