import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ApiService,ServiceRequest } from 'src/app/core/services/api.service';

@Injectable({
	providedIn: 'root'
})
export class BigBrotherService {
	constructor(
		private api: ApiService
	) { }

	season(): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/season.cgi'
			,message: 'Getting Season'
			,cache: 'season'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => response?.season ?? '00'));
	}


	player(pkey: string): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/players.cgi'
			,body: {pkey:pkey}
			,message: 'Getting Player'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => (response || {}).data ?? {}));
	}


	houseguests(): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/houseguests.cgi'
			,message: 'Getting Houseguests'
			,cache: 'houseguests'
			,force: true
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => (response || {}).data || []));
	}


	scores(): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/scoresFind.cgi'
			,message: 'Getting Scores'
			,cache: 'scores'
			,force: true
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => (response || {}).data || []));
	}

	history(): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/scoresChart.cgi'
			,message: 'Getting Charts'
			,cache: 'charts'
			,force: true
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => (response || {}).data || []));
	}


	validate(): Observable<boolean> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/admin/check.cgi'
			,message: 'Validating User'
			,cache: 'admin'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => response && (response as any).message === 'Admin Access Confirmed'));
	}


	dropPick(pkey: string, hkey: string): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/admin/picksRemove.cgi'
			,body:{
				pkey:pkey
				,hkey:hkey
			}
			,message: 'Dropping Pick'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => !!response?.data));
	}
	
	
	addPick(pkey: string, hkey: string): Observable<any> {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/admin/picksAdd.cgi'
			,body:{
				pkey:pkey
				,hkey:hkey
			}
			,message: 'Adding Pick'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => !!response?.data));
	}
}
