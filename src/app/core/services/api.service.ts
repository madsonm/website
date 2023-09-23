import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable,interval,of,throwError } from 'rxjs';
import { catchError,filter,startWith,switchMap,tap } from 'rxjs/operators';
import { CacheInterceptor } from '../interceptors/cache.interceptor';
import { ConfirmInterceptor } from '../interceptors/confirm.interceptor';
import { LoadingInterceptor } from '../interceptors/loading.interceptor';

export interface ServiceRequest {
	action: string;     // get/post
	url: string;
	params?: object;
	body?: any;
	message?: string;
	confirm?: any;      // Whether to show a success snackbar on response.success
	cache?: string;     // What name to cache data under (null means no caching)
	force?: boolean;    // Whether to reset the cache (force service call)
	polling?: number;    // Whether to poll this request, and if so the number of seconds between service calls
	type?: any;
	persist?: boolean;  // Whether to persist storage data (cannot persist cookie)
	unsecure?: boolean; // Whether this url should omit "secure" pathing
}

@UntilDestroy({ checkProperties: true })
@Injectable({
	providedIn: 'root'
})
export class ApiService {
	persist = {} as any;

	constructor(
		private http: HttpClient,
		private session: SessionStorageService
	) { }

	call(request: ServiceRequest): Observable<any> {
		request.action = `${request.action || ''}`.toUpperCase();

		if (request.action === 'GET') {
			return this.get(request);
		} else if (request.action === 'POST') {
			return this.post(request);
		} else {
			console.log(`Service '${request.action}' INVALID`,request.url);
			return of(null);
		}
	}


	private get(request: ServiceRequest): Observable<any> {
		const url = request.url;
		const options = this.getOptions('get',request);
		let message = request.message as string | null;

		// Success response method
		const success = () => {
			message = null; // Only do a loading message on the first call (in case this is polling)
		};

		// Error response method
		const error = (err: HttpErrorResponse) => {
			message = null; // Only do a loading message on the first call (in case this is polling)
			return throwError(err);
		};

		if (1 || (request.polling && isNaN(request.polling))) {
			// Single call
			return this.http.get<any>(url,options).pipe(
				tap(() => { this.doPersist(request); })
				,catchError(error)
			);
		} else {
			// Repeated calls
			return interval(request.polling).pipe(
				startWith(0)
				,switchMap(() => this.http.get<any>(url,options).pipe(
					tap(success)
					,catchError(error)
				))
			);
		}
	}

	private post(request: ServiceRequest): Observable<any> {
		const url = request.url;
		const options = this.getOptions('post',request);
		let message = request.message as string | null;
		const body = request.body;

		// Success response method
		const success = () => {
			message = null; // Only do a loading message on the first call (in case this is polling)
		};

		// Error response method
		const error = (err: HttpErrorResponse) => {
			message = null; // Only do a loading message on the first call (in case this is polling)
			return throwError(err);
		};


		if (1 || (request.polling && isNaN(request.polling))) {
			// Single call
			return this.http.post<any>(url,body,options).pipe(
				tap(() => { this.doPersist(request); })
				,catchError(error)
			);
		} else {
			// Repeated calls
			return interval(request.polling).pipe(
				startWith(0)
				,switchMap(() => this.http.post<any>(url,body,options).pipe(
					tap(success)
					,catchError(error))
				)
			);
		}
	}


	private doPersist(req: ServiceRequest) {
		if (!req.cache || !req.persist) { return; }  // Persist only if we are also caching
		if (req.action === 'POST' && !!req.params) { return; } // Persist is not allowed on POST calls with input data

		const request = { ...req };
		const key = request.cache ?? null;

		if (key && this.persist[key]) { return; }  // Don't double-persist

		// Redefine our request for cache updating only
		delete request.confirm;
		delete request.message;
		delete request.persist;
		delete request.polling;
//		request.cache = true;
		request.force = true;

		this.persist[key] = true;  // Remember we are already persisting this service
		this.session.observe(key)
			.pipe(
				filter(ngx => !ngx.isInternal || (!Array.isArray(ngx.newValue) && typeof ngx.newValue !== 'object'))
				,filter(ngx => (JSON.stringify(ngx.oldValue) !== JSON.stringify(ngx.newValue))) // Fix issues with IE11
			)
			.subscribe(ngx => {
				console.log('PERSISTING',key,ngx);
				this.call(request).toPromise();
			});
	}


	readAsset(request: ServiceRequest): Observable<any> {
		const url = `assets/${request.url}`;
		const options = this.getOptions('get',request);

		return this.http.get<any>(url,options)
			.pipe(
				tap(response => {
					console.log('Asset GET',url,response);
				})
				,catchError((err: HttpErrorResponse) => {
					console.error('Asset GET ERROR',url,err);

					return throwError(err);
				}));
	}


	// Return a header object built from the input information
	private getOptions(method: string,request: ServiceRequest): any {
		const options = {
			responseType: 'json'
		} as any;

		if (request.params && Object.keys(request.params).length > 0) {
			options.params = request.params;
		}
		if (request.type === 'text') {
			options.responseType = 'text' as 'json';
		}

		// Apply data-pass headers (picked up and removed in interceptor)
		const headers = {} as any;
		if (request.cache) {
			headers[CacheInterceptor.cache] = request.cache;   // Cache results

			if (request.force) {
				headers[CacheInterceptor.reset] = 'reset';   // Cache results but force update on this call
			}
		}
		if (request.message) {
			headers[LoadingInterceptor.key] = request.message;   // Show a loading message
		}
		if (request.confirm) {
			headers[ConfirmInterceptor.key] = request.confirm;   // Show a confirm message on success
		}

		if (Object.keys(headers).length > 0) {
			options.headers = new HttpHeaders(headers);
		}

		return options;
	}
}
