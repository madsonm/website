import { Component,OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { BigBrotherService } from '../big-brother.service';

@Component({
	selector: 'app-scores',
	templateUrl: './scores.component.html',
	styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
	@SessionStorage() admin: boolean;
	
	scores = [] as any;
	scoring = [] as any;

	constructor(private service: BigBrotherService) { }

	ngOnInit(): void {
		this.load();
	}

	private load(): void {
		this.service.scores().subscribe(response => {
			this.scores = response ?? [];
		});
	}

	getClass(obj: any): string {
		return `
			${!!obj.evicted ? ' evicted': ''}
			${!!obj.hoh ? 'hoh': ''}
			${!!obj.pov ? 'pov': ''}
			${!!obj.nominated ? 'nominated': ''}
		`.replace(/\s+/,' ').trim();
	}
}
