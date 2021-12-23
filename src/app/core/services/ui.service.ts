import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private snackBar: MatSnackBar
  ) {}

  changeTheme(trigger: boolean): void {
    trigger
      ? this.document.body.setAttribute('color-theme', 'light')
      : this.document.body.setAttribute('color-theme', 'dark');
  }

  showNotification(user: User): void {
    this.snackBar.open(`${user.name} added to list`, '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
