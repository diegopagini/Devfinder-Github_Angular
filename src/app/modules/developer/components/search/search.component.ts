import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/core/services/store.service';
import { loadingSelector } from 'src/app/core/store/selectors/app.selectors';

@Component({
  selector: 'app-searchdev',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search: string;
  loading$: Observable<boolean>;

  constructor(private storeService: StoreService, private store: Store) {}

  ngOnInit(): void {
    this.search = '';
    this.loading$ = this.store.select(loadingSelector);
  }

  getSearch(): void {
    if (this.search?.length >= 1) {
      this.storeService.dispatchGetSearch(this.search);
    }
  }
}
