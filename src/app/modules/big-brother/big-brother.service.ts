import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ApiService,ServiceRequest } from 'src/app/core/services/api.service';

@Injectable({
	providedIn: 'root'
})
export class BigBrotherService {

	constructor(
		private api: ApiService
	) { }

	houseguests() {
		const request = {
			action: 'POST'
			,url: '/cgi/bb/houseguestsFind.cgi'
			,message: 'Getting Houseguests'
			,cache: true
		} as ServiceRequest;

		return this.api.call(request).pipe(map(response => (response || {}).data || []));
	}
}
