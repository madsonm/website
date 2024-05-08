import { Component,OnInit } from '@angular/core';
import { FilterByPipe } from 'ngx-pipes';
import { LocalStorageService } from 'ngx-webstorage';
import { LegendaryService } from '../legendary.service';

@Component({
	selector: 'app-legendary-main'
	,templateUrl: './main.component.html'
	,styleUrls: ['./main.component.scss']
	,providers: [FilterByPipe]
})
export class MainComponent implements OnInit {
	data: any[];
	filter: string;

	get hasFavorites(): boolean { return this.data.filter(rec => !!rec.favorite).length > 0; }

	constructor(
		private service: LegendaryService
		,private local: LocalStorageService
	) { }


	ngOnInit(): void {
		const favorites = this.local.retrieve('favorites') ?? [];

		this.service.get().subscribe((data: any[]) => {
			this.data = data.map((rec,i) => ({
				...rec
				,idx: i
				,favorite: favorites.includes(i) ? 'favorite' : null
			}))
		});
	}

	reset(): void {
		this.data = this.data.map(rec => {
			delete rec.favorite;
			return rec
		});
		this.local.clear('favorites');
	}
}
