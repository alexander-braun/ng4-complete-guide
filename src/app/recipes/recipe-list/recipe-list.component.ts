import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test description.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg?quality=90&resize=500%2C454'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test description.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/triple-chocolate-peanut-butter-layer-cake-2-06eee24.jpg?quality=90&resize=500%2C454'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }
}
