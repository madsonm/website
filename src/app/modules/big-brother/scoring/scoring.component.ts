import { AfterViewInit,Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SessionStorage } from 'ngx-webstorage';

@Component({
	selector: 'app-scoring'
	,templateUrl: './scoring.component.html'
	,styleUrls: ['./scoring.component.scss']
})
export class ScoringComponent implements OnInit,AfterViewInit {
	@SessionStorage() scoring: any[];

	data = [] as any;
	dataSource = new MatTableDataSource<any>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	filter = '';

	constructor() {}


	ngOnInit(): void {
		this.load();
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.sort.sort(({ id: 'date', start: 'desc'}) as MatSortable);
		this.dataSource.sort = this.sort;
	}

	private load(): void {
		this.dataSource.data = [...this.scoring].filter(rec => !/bb.+_survived/.test(rec.ekey));
		this.filter = '';
	}


	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
}
