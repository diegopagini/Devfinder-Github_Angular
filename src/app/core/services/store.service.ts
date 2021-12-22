import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSearch } from '../store/actions/app.action';
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
}
