import { AfterViewInit,Component,OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort,MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SessionStorageService } from 'ngx-webstorage';
import { ModalService } from 'src/app/core/services/modal.service';
import { AdminService } from '../admin.service';
import { ModalEventAddComponent } from './modal-event-add/modal-event-add.component';

@Component({
	selector: 'app-events'
	,templateUrl: './events.component.html'
	,styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit,AfterViewInit {
	data = [] as any;
	dataSource = new MatTableDataSource<any>;
	admin = false;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	filter = '';

	constructor(
		private service: AdminService
		,private session: SessionStorageService
		,private modal: ModalService
	) {
		this.admin = this.session.retrieve('admin');
	}


	ngOnInit(): void {
		this.load();
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.sort.sort(({ id: 'date', start: 'desc'}) as MatSortable);
		this.dataSource.sort = this.sort;
	}

	private load(): void {
		this.service.eventsFind().subscribe(response => {
			this.data = response;
			this.updateData();
		});
	}


	private updateData(): void {
		this.dataSource.data = [...this.data].filter(rec => !/bb.+_survived/.test(rec.ekey));
		this.filter = '';
	}


	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}


	add(): void {
		this.modal.open({
			modal: ModalEventAddComponent
			,callbackFn: () => this.load()
		});
	}
}
