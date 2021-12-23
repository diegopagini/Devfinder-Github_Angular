import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { StoreService } from 'src/app/core/services/store.service';
import {
  addingSelector,
  userSelector,
} from 'src/app/core/store/selectors/app.selectors';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  developerData$: Observable<User>;
  adding$: Observable<boolean>;

  constructor(private store: Store, private storeService: StoreService) {}

  ngOnInit(): void {
    this.developerData$ = this.store.select(userSelector);
    this.adding$ = this.store.select(addingSelector);
  }

  addDeveloper(developer: User): void {
    this.storeService.dispatchAddDeveloper(developer);
  }
}
