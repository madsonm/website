import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpHandler,HttpRequest,HttpEvent,HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ConfirmInterceptor implements HttpInterceptor {
	public static key = 'Show-Confirm';
	timer: any;

	constructor(private snackbar: MatSnackBar) { }


	// Config driven display of snackbar on successful response
	private confirm(message: string,response: any) {
		if (message && response) {
			if (response.result === 'OK') {
				this.show(message);
			} else {
				this.show(`Error ${message}`);
			}
		}
	}


	// Don't overload the snackbar
	private show(message: string) {
		if (this.timer) { clearTimeout(this.timer); }
		this.timer = setTimeout(() => {
			this.snackbar.open(message,'Close');
		},500);
	}


	intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {

		const message = this.getMessage(req.headers) ?? '';
		const headers = this.getHeaders(req.headers);
		const newReq = req.clone({ headers });

		return next.handle(newReq).pipe(
			tap(event => {
				if (event instanceof HttpResponse) {
					this.confirm(message,event.body);
				}
			})
		);
	}


	private getMessage(headers: HttpHeaders): string | null {
		const key = ConfirmInterceptor.key;
		return headers.has(key) ? headers.get(key) : null;
	}

	private getHeaders(headers: HttpHeaders): HttpHeaders {
		const key = ConfirmInterceptor.key;

		if (headers.has(key)) {
			headers.delete(key);
		}

		return headers;
	}
}
