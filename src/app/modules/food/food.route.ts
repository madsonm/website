import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: 'food',component: RecipesComponent }
  ,{ path: 'food/**',redirectTo: 'food' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
  ,exports: [RouterModule]
})

export class FoodRoutingModule { }
