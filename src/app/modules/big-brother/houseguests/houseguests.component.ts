import { Component } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';

@Component({
	selector: 'app-houseguests',
	templateUrl: './houseguests.component.html',
	styleUrls: ['./houseguests.component.scss']
})
export class HouseguestsComponent {
	@SessionStorage() houseguests: any[];

	constructor() { }
}
