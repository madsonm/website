import { Component,ViewChild } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@ViewChild('navTemplate') navTemplate;

	navRef: MatDialogRef<any>;
	navLinks = [
		//{ url: '/bb',name: 'BB',longname: 'Big Brother',detail: 'Most recent Big Brother competition' }
		{ url: '/bb',name: 'BB',longname: 'Big Brother',detail: 'Big Brother Competition Website' }
		,{ url: '/food',name: 'Food',longname: 'Recipes / Food',detail: 'Commonly used recipes' }
		,{ url: '/legendary',name: 'Legendary',longname: 'Legendary Keywords',detail: 'Defintions for Marvel Legendary Keywords' }
	];

	constructor(
		private dialog: MatDialog
	) { }


	openNav(): void {
		this.navRef = this.dialog.open(this.navTemplate,{
			autoFocus: false
			,closeOnNavigation: true
			,width: '100vw'
			,height: '100vh'
			,maxWidth: '100vh'
			,maxHeight: '100vh'
			,panelClass: 'fullNav'
		});
	}

	closeNav(): void {
		this.navRef.close();
	}
}
