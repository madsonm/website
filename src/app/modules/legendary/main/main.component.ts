import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FilterByPipe } from 'ngx-pipes';
import { LegendaryService } from '../legendary.service';

@Component({
	selector: 'app-legendary-main'
	,templateUrl: './main.component.html'
	,styleUrls: ['./main.component.scss']
	,providers: [FilterByPipe]
})
export class MainComponent implements OnInit {
	data?: any[];
	keywords?: string[];
	sources?: string[];

	filterForm: FormGroup;

	selected?: any[];

	constructor(
		private service: LegendaryService
		,private formBuilder: FormBuilder
		,private filterPipe: FilterByPipe
	) {
		this.filterForm = this.formBuilder.group({
			'keyword': [null]
			,'source': [null]
		});
	}

	ngOnInit(): void {
		this.service.get().subscribe((data: any[]) => {
			this.data = data;
			this.keywords = <string[]>[...new Set(data.map(rec => rec.keyword).filter(keyword => !!keyword))].sort()
			this.sources = <string[]>[...new Set([].concat.apply([],data.map(rec => rec.source).filter(source => !!source)))].sort();
		});
	}

	getData() {
		const filterKeyword = Array.of(this.filterForm.value.keyword);
		const filterSource = Array.of(this.filterForm.value.source);
		return this.filterPipe.transform(
			this.filterPipe.transform(
				this.data
				,['keyword']
				,filterKeyword
			)
			,['source']
			,filterSource
		);
	}

	clear(field: string) {
		this.filterForm.get(field).setValue(null);
	}

	select(input: any) {
		const obj = { ...input };
		obj.less = true;
		const selected = [...(this.selected || [])].filter(rec => rec.keyword !== obj.keyword);
		selected.push(obj);
		this.selected = selected;
	}

	deselect(input: any) {
		const selected = [...(this.selected || [])].filter(rec => rec.keyword !== input.keyword);
		this.selected = selected;
	}

	isSelected(input: any): boolean {
		return [...(this.selected || [])].filter(rec => rec.keyword === input.keyword).length > 0
	}
}
