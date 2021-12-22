import { Component } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mode: 'dark_mode' | 'wb_sunny' = 'wb_sunny';
  switch = false;

  constructor(private storeService: StoreService) {}

  changeMode(): void {
    this.switch = !this.switch;
    this.switch ? (this.mode = 'dark_mode') : (this.mode = 'wb_sunny');

    this.storeService.dispatchChangeTheme(this.switch);
  }
}
