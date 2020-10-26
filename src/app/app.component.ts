import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigationTarget = 'recipe';
  onNavigationChange(event: string): void {
    this.navigationTarget = event;
  }
}
