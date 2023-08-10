import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpRequest,HttpEvent,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
	public static key = 'Show-Loading';
	message: string | null;

	constructor(private loading: LoadingService) {
		this.message = null;
	}


	intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
		this.message = null;

		const headers = this.getHeaders(req.headers);
		const newReq = req.clone({ headers });

		this.loading.start(req.url ?? '',this.message ?? '');
		return next.handle(newReq).pipe(
			tap(event => {
				if (event instanceof HttpResponse) {
					this.loading.stop(event.url ?? '',this.message ?? '');
				}
			})
			,catchError(error => {
				this.loading.stop(error.url ?? '',this.message ?? '');
				return throwError(error);
			})
		);
	}


	private getHeaders(headers: HttpHeaders): HttpHeaders {
		const key = LoadingInterceptor.key;

		if (headers.has(key)) {
			this.message = headers.get(key);
			headers.delete(key);
		}

		return headers;
	}
}
