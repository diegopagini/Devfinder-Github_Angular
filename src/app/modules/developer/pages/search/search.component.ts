import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, shareReplay } from 'rxjs';
import {
  areDevelopersSelector,
  loadingSelector,
  notFoundSelector,
} from 'src/app/core/store/selectors/app.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  loading$: Observable<boolean>;
  notFound$: Observable<boolean>;
  developers$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.developers$ = this.store.select(areDevelopersSelector);
    this.loading$ = this.store.select(loadingSelector).pipe(shareReplay());
    this.notFound$ = this.store.select(notFoundSelector);
  }
}
