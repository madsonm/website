import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgPipesModule } from 'ngx-pipes';
import { FilterByNotPipe } from '../core/pipes/filter-by-not.pipe';
import { KeywordComponent } from './keyword/keyword.component';
import { LegendaryService,MarvelLegendaryKeyword } from './legendary.service';

@Component({
	selector: 'app-legendary'
	,templateUrl: './legendary.component.html'
	,styleUrl: './legendary.component.scss'
	,imports: [
		FormsModule
		,MatFormFieldModule
		,MatInputModule
		,MatIconModule
		,KeywordComponent
		,NgPipesModule
		,FilterByNotPipe
	]
})
export class LegendaryComponent {
	service = inject(LegendaryService);

	filter = '';
	keywords: MarvelLegendaryKeyword[] = [];
	selected: MarvelLegendaryKeyword[] = [];

	constructor() {
		this.service.get().subscribe(response => {
			this.keywords = response;
		});
	}


	select(keyword: MarvelLegendaryKeyword): void {
		const selected = this.trim(keyword);
		selected.push(keyword);
		this.selected = selected;
	}

	deselect(keyword: MarvelLegendaryKeyword): void {
		this.selected = this.trim(keyword);
	}

	private trim(keyword: MarvelLegendaryKeyword): MarvelLegendaryKeyword[] {
		return [...this.selected].filter(kw => kw.keyword !== keyword.keyword);
	}

	reset(): void {
		// Reset favorites
	}
}
