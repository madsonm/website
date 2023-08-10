import { Component } from '@angular/core';
import { SessionStorage } from 'ngx-store';

@Component({
	selector: 'app-big-brother',
	templateUrl: './big-brother.component.html',
	styleUrls: ['./big-brother.component.scss']
})
export class BigBrotherComponent {
	@SessionStorage('/cgi/bb/houseguestsfind.cgi') houseguests: any[];

	constructor() { }
}
