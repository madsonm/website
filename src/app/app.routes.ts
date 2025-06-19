import { Routes } from '@angular/router';
import { LegendaryComponent } from './legendary/legendary.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
	{
		path: 'recipes'
		,title: 'Recipes'
		,component: RecipesComponent
	},{
		path: 'legendary'
		,title: 'Legendary'
		,component: LegendaryComponent
	}
];

export default routes;
