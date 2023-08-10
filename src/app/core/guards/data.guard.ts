import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate } from '@angular/router';
import { Observable,concat } from 'rxjs';
import { map } from 'rxjs/operators';
import { BigBrotherService } from 'src/app/modules/big-brother/big-brother.service';

@Injectable()
export class DataGuard implements CanActivate {

	constructor(
		private service: BigBrotherService
	) { }

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		const houseguests$ = this.service.houseguests();

		return concat(houseguests$).pipe(
			map((hg) => true)
		);
	}
}
