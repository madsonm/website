import { Component,Input } from '@angular/core';
import { FilterByPipe } from 'ngx-pipes';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
	selector: 'legendary-keyword'
	,templateUrl: './keyword.component.html'
	,styleUrls: ['./keyword.component.scss']
	,providers: [FilterByPipe]
})
export class KeywordComponent {
	@Input('keyword') kw: any;

	get level1(): boolean { return this.kw.level === 1; }
	get level2(): boolean { return this.kw.level === 2; }

	constructor(private local: LocalStorageService) { }

	toggleLevel(): void {
		let level = this.kw.level ?? 0;
		this.kw.level = ++level > 2
			? 0
			: level;
	}


	toggleFavorite(): void {
		this.kw.level = 0;
		this.kw.favorite = this.kw.favorite === 'favorite'
			? null
			: 'favorite';
		this.updateStorage();
	}


	private updateStorage(): void {
		let favorites = this.local.retrieve('favorites') ?? [];
		let idx = this.kw.idx;

		// If favorite, add to list.  Else remove from list
		if (this.kw.favorite === 'favorite') {
			favorites.push(idx);
		} else {
			favorites = favorites.filter(i => i !== idx);
		}

		this.local.store('favorites',[...new Set(favorites)]);
	}
}
