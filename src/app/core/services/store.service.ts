import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';
import { addDeveloper, getSearch } from '../store/actions/app.action';
import { changeTheme } from '../store/actions/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store) {}

  dispatchChangeTheme(payload: boolean): void {
    this.store.dispatch(changeTheme({ payload }));
  }

  dispatchGetSearch(search: string): void {
    this.store.dispatch(getSearch({ payload: search }));
  }

  dispatchAddDeveloper(developer: User): void {
    this.store.dispatch(addDeveloper({ payload: developer }));
  }
}
