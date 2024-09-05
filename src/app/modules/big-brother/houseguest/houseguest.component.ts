import { Component,Input } from '@angular/core';

@Component({
	selector: 'houseguest',
	templateUrl: './houseguest.component.html',
	styleUrls: ['./houseguest.component.scss']
})
export class HouseguestComponent {
	@Input('h') houseguest: any;

	constructor() { }

	getClasses(): string {
		return 'houseguest'
			+ (this.houseguest.evicted ? ' evicted' : '')
			+ (this.houseguest.nominated && !this.houseguest.saved ? ' nominated' : '')
			+ (this.houseguest.pov ? ' pov' : '')
			+ (this.houseguest.saved ? ' saved' : '')
	}
}
