import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: any[];

  constructor(private service: FoodService) { }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.service.get().subscribe(response => {
      this.recipes = response;
    });
  }
}
