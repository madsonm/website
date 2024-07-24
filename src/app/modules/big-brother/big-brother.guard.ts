import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate } from '@angular/router';
import { Observable,forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { BigBrotherService } from 'src/app/modules/big-brother/big-brother.service';

@Injectable()
export class BigBrotherGuard implements CanActivate {
	constructor(private service: BigBrotherService) { }

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
