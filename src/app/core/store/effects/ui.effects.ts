import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs';
import { CustomAction } from '../../models/actions.model';
import { UiService } from '../../services/ui.service';
import { changeTheme } from '../actions/ui.actions';
import { addDeveloper } from '../actions/app.action';

@Injectable()
export class UiEffects {
  changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(changeTheme),
        map((action: CustomAction) => action),
        tap((action: CustomAction) =>
          this.uiService.changeTheme(action.payload)
        )
      ),
    {
      dispatch: false,
    }
  );

  addToList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addDeveloper),
        map((action: CustomAction) => action),
        tap((action: CustomAction) =>
          this.uiService.showNotification(action.payload)
        )
      ),
    {
      dispatch: false,
    }
  );

  constructor(private actions$: Actions, private uiService: UiService) {}
}
