import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  mode: 'dark' | 'light' = 'light';
  switch = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeMode(): void {
    this.switch = !this.switch;

    this.switch ? (this.mode = 'dark') : (this.mode = 'light');

    this.switch
      ? this.document.body.setAttribute('color-theme', 'light')
      : this.document.body.setAttribute('color-theme', 'dark');
  }
}
