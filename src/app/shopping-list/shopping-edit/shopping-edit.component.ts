import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f', { static: false }) shoppingListForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm): void {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        ingredient
      );
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    form.reset();
  }

  onClear(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
    this.editedItemIndex = -1;
  }

  onDelete(form: NgForm): void {
    if (this.editedItemIndex >= 0) {
      this.shoppingListService.deleteIngredient(+this.editedItemIndex);
      this.onClear();
    }
  }
}
