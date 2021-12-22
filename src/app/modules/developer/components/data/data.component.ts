import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { userSelector } from 'src/app/core/store/selectors/app.selectors';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  developerData$: Observable<User>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.developerData$ = this.store.select(userSelector);
  }
}
