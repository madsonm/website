import { Component,OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { BigBrotherService } from '../big-brother.service';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	scores = null as any;

	legendPosition = LegendPosition.Below;

	constructor(private service: BigBrotherService) { }

	ngOnInit(): void {
		//this.load();
	}

	private load(): void {
		this.service.history().subscribe(response => {
			this.scores = response ?? null;
		});
	}
}
