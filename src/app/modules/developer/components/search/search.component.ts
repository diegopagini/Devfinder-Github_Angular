import { Component } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-searchdev',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  search: string;

  constructor(private storeService: StoreService) {}

  getSearch(): void {
    if (this.search?.length >= 1) {
      this.storeService.dispatchGetSearch(this.search);
    }
  }
}
