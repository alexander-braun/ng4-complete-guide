import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() navigationChange: EventEmitter<any> = new EventEmitter();

  dropdownVisible = false;

  toggleVisible(): void {
    this.dropdownVisible = !this.dropdownVisible;
  }

  constructor() {}

  ngOnInit(): void {}

  onNavigate(navigationTarget: string): void {
    this.navigationChange.emit(navigationTarget);
  }
}
