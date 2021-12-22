import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  changeTheme(trigger: boolean): void {
    trigger
      ? this.document.body.setAttribute('color-theme', 'light')
      : this.document.body.setAttribute('color-theme', 'dark');
  }
}
