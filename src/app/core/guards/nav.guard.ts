import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';
import { areDevelopersSelector } from '../store/selectors/app.selectors';

@Injectable({
  providedIn: 'root',
})
export class NavGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    let developers: boolean = false;
    this.store
      .select(areDevelopersSelector)
      .pipe(take(1))
      .subscribe((value) => (developers = value));
    if (developers) {
      return of(true);
    } else {
      this.router.navigate(['/developer']);
      return of(false);
    }
  }
}
