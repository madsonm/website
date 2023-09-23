import { TitleCasePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color,LegendPosition,ScaleType } from '@swimlane/ngx-charts';
import { SessionStorage } from 'ngx-webstorage';
import { ModalService } from 'src/app/core/services/modal.service';
import { BigBrotherService } from '../big-brother.service';

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
	@SessionStorage() admin: boolean;
	@SessionStorage() season: string;
	pkey = this.activatedRoute.snapshot.paramMap.get('pkey');
	player = {} as any;

	colorScheme = { domain: ['#b30000','#7c1158','#4421af','#1a53ff','#0d88e6','#00b7c7','#5ad45a','#8be04e','#ebdc78'] } as Color
	scaleType = ScaleType.Ordinal;
	legendPosition = LegendPosition.Below;

	constructor(
		private service: BigBrotherService
		,private modal: ModalService
		,private titlecase: TitleCasePipe
		,private activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.load();
	}

	private load(): void {
		this.service.player(this.pkey).subscribe(response => {
			this.player = response ?? {};
		});
	}

	getClass(obj: any): string {
		return `${obj.evicted ? 'evicted' : ''} ${obj.active ? 'active' : ''}`.trim();
	}

	setAdmin(): void {
		this.service.validate().subscribe(response => {
			// Nothing to do
		});
	}

	doChange(pick: any): void {
		if (!this.admin) return;

		const name = this.titlecase.transform(pick.name);

		if (pick.active) {
			// If this player currently has this houseguest, offer to drop
			this.modal.confirm({
				title: `Drop ${name}?`
				,button: 'Drop'
				,body: [`Are you sure you want to drop <strong>${name}</strong> from your roster?`]
				,cancel: true
				,callbackFn: () => {
					this.service.dropPick(this.pkey,pick.hkey).subscribe(success => {
						if (success) this.load();
					});
				}
			});
		} else {
			// Can't add evicted houseguests
			if (pick.evicted) return;

			// If this player currently doesn't have this houseguest, offer to add
			this.modal.confirm({
				title: `Add ${name}?`
				,button: 'Add'
				,body: [`Are you sure you want to add <strong>${name}</strong> to your roster?`]
				,cancel: true
				,callbackFn: () => {
					this.service.addPick(this.pkey,pick.hkey).subscribe(success => {
						if (success) this.load();
					});
				}
			});
		}

	}
}
