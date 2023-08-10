import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	constructor(private titleService: Title) { }

	// Initialize Material Table, handle optional sorting and pagination, and add necessary fixes
	initTable(sorter?: MatSort,paginator?: MatPaginator): MatTableDataSource<any> {
		// Apply sorting and pagination to table
		const table = new MatTableDataSource();
		table.data = [];
		table.sortingDataAccessor = (data: any,attribute) => data[attribute]; // Fix for known issue sorting numbers/strings (https://github.com/angular/components/issues/9966#issuecomment-365942460)

		// Apply sorting if we have it
		if (sorter) {
			table.sort = sorter;
		}

		// Apply pagination if we have it
		if (paginator) {
			table.paginator = paginator;
		}

		return table;
	}

	setTitle(title: string) {
		this.titleService.setTitle(`${title} - MM`);
	}
}
