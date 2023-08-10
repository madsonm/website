import { HttpEvent,HttpHandler,HttpInterceptor,HttpRequest,HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-store';
import { Observable,of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

	constructor(private session: SessionStorageService) { }
	public static cache = 'Keep-Cache';
	public static reset = 'Reset-Cache';

	public static cacheKey(url: string): string { return `cache_${url}`; }


	private getStorage(request: HttpRequest<any>): HttpResponse<any> | null {
		if (request.method === 'GET' || (request.method === 'POST' && !request.body)) {
			if (request.headers.has(CacheInterceptor.cache) && !request.headers.has(CacheInterceptor.reset)) {
				let data = this.session.get(CacheInterceptor.cacheKey(request.url));

				if (this.isValid(data)) {
					const body = { success: 'CACHE',data };
					console.log('Service CACHE',request.url,request.body,data);
					return new HttpResponse({ body });
				}
			}
		}
		return null;
	}

	private setStorage(request: HttpRequest<any>,response: HttpResponse<any>) {
		if (request.headers.has(CacheInterceptor.cache)) {
			if (response.body && typeof response.body === 'object' && (response.body.success || (!response.body.warning && !response.body.error))) {
				if (this.isValid(response.body.data)) {
					this.session.set(CacheInterceptor.cacheKey(request.url),response.body.data);
				}
			}
		}
	}


	// Is valid array with data, object with keys, or just data
	private isValid(data: any): boolean {
		if (Array.isArray(data)) { return data.length > 0; }
		if (data instanceof Object) { return Object.keys(data).length > 0; }
		return !!data;
	}

	intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
		// Get and return existing save data (if present)
		const saved = this.getStorage(request);
		if (saved) { return of(saved); }

		return next.handle(request)
			.pipe(
				tap(event => {
					if (event instanceof HttpResponse) {
						this.setStorage(request,event);
					}
				})
			);
	}
}
