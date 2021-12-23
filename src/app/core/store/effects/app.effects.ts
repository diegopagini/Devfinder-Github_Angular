import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, delay, map, mergeMap, Observable, throwError } from 'rxjs';
import { CustomAction } from '../../models/actions.model';
import { User } from '../../models/user.model';
import { DevService } from '../../services/dev.service';
import {
  addDeveloper,
  addDeveloperSuccess,
  getSearch,
  getSearchFail,
  getSearchSuccess,
} from '../actions/app.action';

@Injectable()
export class AppEffects {
  searchDeveloper$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSearch),
      map((action: CustomAction) => this.devService.getUser(action.payload)),
      delay(2000),
      mergeMap((serviceResponse: Observable<User>) => serviceResponse),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(getSearchFail());
        return throwError(error);
      }),
      map((serviceResponse: User) => {
        if (serviceResponse) {
          return getSearchSuccess({ payload: serviceResponse });
        } else {
          return getSearchFail();
        }
      })
    )
  );

  addDeveloper$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDeveloper),
      map((action: CustomAction) => action),
      delay(500),
      map((action) => addDeveloperSuccess({ payload: action.payload }))
    )
  );

  constructor(
    private actions$: Actions,
    private devService: DevService,
    private store: Store
  ) {}
}
