import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet,MatToolbar,MatIcon,MatSidenavModule,MatListModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	navLinks = [
		//{ url: '/bb',name: 'BB',longname: 'Big Brother',detail: 'Most recent Big Brother competition' }
		// { url: '/bb',name: 'BB',longname: 'Big Brother',detail: 'Big Brother Competition Website' }
		{ url: '/legendary',name: 'Legendary',longname: 'Legendary Keywords',detail: 'Defintions for Marvel Legendary Keywords' }
		,{ url: '/recipes',name: 'Recipes',longname: 'Recipes / Food',detail: 'Commonly used recipes' }
	];
}
