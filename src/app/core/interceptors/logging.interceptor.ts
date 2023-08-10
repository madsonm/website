import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpRequest,HttpEvent,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

	// Log service call and response data to console (easier for development)
	private log(req: HttpRequest<any>,resp: any) {
		const method = `${req.method}`.toUpperCase();
		const url = req.url;
		const request = method === 'GET' ? req.params : req.body;

		if (resp instanceof HttpErrorResponse) {
			console.log(`Service ${method} ERROR`,url,request,resp.error);
		} else {
			console.log(`Service ${method}`,url,request,resp.body);
		}
	}


	intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req)
			.pipe(
				tap(event => {
					if (event instanceof HttpResponse) {
						this.log(req,event);
					}
				})
				,catchError((error: HttpErrorResponse) => {
					this.log(req,'TIMEOUT');
					return of(new HttpResponse({ body: { error: 'TIMEOUT' } }));
				})
			);
	}
}
