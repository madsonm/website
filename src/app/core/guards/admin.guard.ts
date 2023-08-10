import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService,ServiceRequest } from '../services/api.service';

@Injectable()
export class AdminGuard implements CanActivate {

	constructor(private api: ApiService) { }

	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
		const area = `${state.url || ''}`.replace(/^.*\/(movie|bb)\/.*$/i,'$1');

		const request = {
			action: 'POST'
			,url: `/cgi/${area}/admin/check.cgi`
			,message: 'Validating User'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => response && (response as any).result === 'OK'));
	}
}
