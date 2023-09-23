import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable,forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService,ServiceRequest } from '../services/api.service';

@Injectable()
export class AdminGuard {
	constructor(
		private api: ApiService
		,private session: SessionStorageService
	) { }

	canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> {
		const validate$ = this.validate();
		const scoring$ = this.scoring();

		return forkJoin([
			validate$
			,scoring$
		]).pipe(
			map(responses => {
				return true;
			})
		);
	}



	private validate(): Observable<boolean> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/admin/check.cgi'
			,message: 'Validating User'
			,cache: 'admin'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => response && (response as any).message === 'Admin Access Confirmed'));
	}


	private scoring(): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/admin/scoringFind.cgi'
			,message: 'Getting scores'
			,cache: 'scoring'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => response && Array.isArray(response.data)));
	}
}
