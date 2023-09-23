import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ApiService,ServiceRequest } from 'src/app/core/services/api.service';

@Injectable({providedIn: 'root'})
export class AdminService {
	constructor(
		private api: ApiService
	) { }


	eventsFind() {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/admin/eventsFind.cgi'
			,message: 'Getting Events'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => (response || {}).data || []));
	}


	eventAdd(obj: any) {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/admin/eventsAdd.cgi'
			,body: {...obj}
			,message: 'Saving Event'
			,confirm: 'Saved Event'
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => (response || {}).result === 'OK'));
	}
}
