import { Component } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mode: 'dark' | 'light' = 'light';
  switch = false;

  constructor(private storeService: StoreService) {}

  changeMode(): void {
    this.switch = !this.switch;
    this.switch ? (this.mode = 'dark') : (this.mode = 'light');

    this.storeService.dispatchChangeTheme(this.switch);
  }
}
