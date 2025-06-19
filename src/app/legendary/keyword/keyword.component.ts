import { Component,Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LegendaryIconPipe } from '../pipes/icon.pipe';
import { LegendaryStylePipe } from '../pipes/style.pipe';

@Component({
  selector: 'legendary-keyword',
  imports: [MatCardModule,MatIconModule,LegendaryIconPipe,LegendaryStylePipe],
  templateUrl: './keyword.component.html',
  styleUrl: './keyword.component.scss'
})
export class KeywordComponent {
	@Input('keyword') kw: any;

	get level1(): boolean { return this.kw.level === 1; }
	get level2(): boolean { return this.kw.level === 2; }

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
		// let favorites = this.local.retrieve('favorites') ?? [];
		// let idx = this.kw.idx;

		// // If favorite, add to list.  Else remove from list
		// if (this.kw.favorite === 'favorite') {
		// 	favorites.push(idx);
		// } else {
		// 	favorites = favorites.filter(i => i !== idx);
		// }

		// this.local.store('favorites',[...new Set(favorites)]);
	}
}
