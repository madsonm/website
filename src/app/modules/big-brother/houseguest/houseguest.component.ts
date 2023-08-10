import { Component,Input,OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-store';
import { BigBrotherService } from '../big-brother.service';

@Component({
	selector: 'app-houseguest',
	templateUrl: './houseguest.component.html',
	styleUrls: ['./houseguest.component.scss']
})
export class HouseguestComponent implements OnInit {
	@SessionStorage('/cgi/bb/houseguestsfind.cgi') houseguests: any[];
	@Input() key: string;

	constructor(private service: BigBrotherService) { }

	ngOnInit(): void {

	}
}
