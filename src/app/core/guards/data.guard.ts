import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable,forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { BigBrotherService } from 'src/app/modules/big-brother/big-brother.service';

@Injectable()
export class DataGuard implements CanActivate {

	constructor(
		private service: BigBrotherService
		,private session: SessionStorageService
	) { }

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		const season$ = this.service.season()
		const houseguests$ = this.service.houseguests();

		return forkJoin([
			season$
			,houseguests$
		]).pipe(
			map(responses => {
				return true;
			})
		);
	}
}
