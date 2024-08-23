import { Component,OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { BigBrotherService } from '../big-brother.service';
import { forkJoin } from 'rxjs';

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
		const scores$ = this.service.scores();
		const scoredetails$ = this.service.scoreDetails();

		forkJoin([
			scores$
			,scoredetails$
		]).subscribe(response => {
			const players = response[0] ?? [];
			const picks = response[1] ?? [];

			this.scores = players
				.sort((a,b) => b.score - a.score)
				.map(player => {
					player.current = picks
						.filter(pick => pick && pick.active === 'Y' && pick.pkey === player.pkey)
						.sort((a,b) => a.hkey > b.hkey ? 1 : -1);
					return player;
				});
		});
	}

	getClass(obj: any): string {
		return `
			${!!obj.evicted ? ' evicted' : ''}
			${!!obj.hoh ? 'hoh' : ''}
			${!!obj.pov ? 'pov' : ''}
			${!!obj.nominated ? 'nominated' : ''}
		`.replace(/\s+/,' ').trim();
	}
}
