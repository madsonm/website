import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map,take } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private http: HttpClient) { }

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		return this.http.post('/cgi/bb/admin/check.cgi',{}).pipe(
			take(1)
			,map(response => response && (response as any).result === 'OK')
		);
	}
}
