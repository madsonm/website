import { Component } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';

@Component({
	selector: 'app-big-brother',
	templateUrl: './big-brother.component.html',
	styleUrls: ['./big-brother.component.scss']
})
export class BigBrotherComponent {
	@SessionStorage() season: string;
	constructor() { }
}
