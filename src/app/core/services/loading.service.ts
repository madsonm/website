import { Injectable,NgZone } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';


@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	messages = [] as any;
	loading = false;

	loadingTO?: NodeJS.Timeout;
	textTO?: NodeJS.Timeout;

	constructor(
		private zone: NgZone,
		private ngxService: NgxUiLoaderService
	) { }

	start(url: string,message: string): void {
		const route = this.getRoute(url);
		if (message && message.trim()) {
			this.messages.push({ route,message });
		}
		this.loadingEval();
	}

	stop(url: string,message: string): void {
		const route = this.getRoute(url);
		this.messages = [...(this.messages || [])].filter(rec => rec.route !== route);
		this.loadingEval();
	}

	private getRoute(url: string): string {
		return `${url}`.replace(/^https?:\/\/[^\/]+/i,'');
	}

	private loadingEval(): void {
		this.zone.run(() => {
			if (this.messages.length > 0 && !this.loading) {
				this.loading = true;
				this.setText();
				this.ngxService.start();
			} else if (this.messages.length === 0 && this.loading) {
				// Use timeout to help open/close/open/close issues for consecutive service calls
				clearTimeout(this.loadingTO);
				clearTimeout(this.textTO);
				this.loadingTO = setTimeout(() => {
					this.ngxService.stop();
					this.loading = false;
				},150);
				this.textTO = setTimeout(() => {
					this.setText();
				},1000);
			}
		});
	}

	private setText() {
		const dom = document.querySelector<HTMLElement>('.ngx-loading-text');
		if (dom) dom.innerHTML = [...(this.messages || [])]
			.map(rec => rec.message)
			.filter((v,i,s) => s.indexOf(v) === i)
			.join('<br />');
	}
}
