import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { SharedModule } from 'src/app/core/shared.module';
import { FoodRoutingModule } from './food.route';



@NgModule({
  declarations: [RecipesComponent]
  ,imports: [
    CommonModule
    ,SharedModule
    ,FoodRoutingModule
  ]
  ,schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FoodModule { }
