import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { User } from '../models/user.model';
import {
  addDeveloper,
  getSearch,
  removeDeveloper,
} from '../store/actions/app.action';
import { changeTheme } from '../store/actions/ui.actions';
import { developersSelector } from '../store/selectors/app.selectors';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private store: Store, private uiService: UiService) {}

  dispatchChangeTheme(payload: boolean): void {
    this.store.dispatch(changeTheme({ payload }));
  }

  dispatchGetSearch(search: string): void {
    this.store.dispatch(getSearch({ payload: search }));
  }

  dispatchAddDeveloper(developer: User): void {
    this.store
      .select(developersSelector)
      .pipe(take(1))
      .subscribe((developers: User[]) => {
        const exist = developers.find(
          (el: User) => el.login.toLowerCase() === developer.login.toLowerCase()
        );

        if (!exist) {
          this.store.dispatch(addDeveloper({ payload: developer }));
        } else {
          this.uiService.showNotification(
            'This developer is already on your list.'
          );
        }
      });
  }

  dispatchRemoveDeveloper(developer: User): void {
    this.store.dispatch(removeDeveloper({ payload: developer }));
  }
}
