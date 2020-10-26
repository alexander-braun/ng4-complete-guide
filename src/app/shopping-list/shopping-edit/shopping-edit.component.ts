import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  addNewIngredient(): void {
    const name: string = this.nameInputRef.nativeElement.value;
    const amount: number = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.ingredient.emit(ingredient);
  }
}
