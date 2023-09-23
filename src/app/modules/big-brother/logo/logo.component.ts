import { Component } from '@angular/core';
import { SessionStorage,SessionStorageService } from 'ngx-webstorage';
import { BigBrotherService } from '../big-brother.service';

@Component({
	selector: 'logo',
	templateUrl: './logo.component.html',
	styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
	@SessionStorage() season: any;
	@SessionStorage() admin: any;

	constructor(
		private service: BigBrotherService
		,private session: SessionStorageService
	) { }

	checkAdmin(): void {
		if (this.admin) {
			// If we are admin, turn that off
			this.session.store('admin',false);
		} else {
			// If we are not admin, determine if we can be
			this.service.validate().subscribe();
		}
	}
}
