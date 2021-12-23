import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadingSelector } from 'src/app/core/store/selectors/app.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  loading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(loadingSelector);
  }
}
