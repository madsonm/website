import { Component,Input } from '@angular/core';
import { BigBrotherService } from '../big-brother.service';

@Component({
	selector: 'houseguest',
	templateUrl: './houseguest.component.html',
	styleUrls: ['./houseguest.component.scss']
})
export class HouseguestComponent {
	@Input('h') houseguest: any;

	constructor(private service: BigBrotherService) { }


	getClasses(): string {
		return 'houseguest'
			+ (this.houseguest.evicted ? ' evicted' : '')
			+ (this.houseguest.nominated ? ' nominated' : '')
			+ (this.houseguest.pov ? ' pov' : '')
			+ (this.houseguest.saved ? ' saved' : '')
	}
}
