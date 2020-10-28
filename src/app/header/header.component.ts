import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  dropdownVisible = false;

  toggleVisible(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
