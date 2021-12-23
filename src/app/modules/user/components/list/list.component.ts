import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { developersSelector } from 'src/app/core/store/selectors/app.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  developers$: Observable<User[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.developers$ = this.store.select(developersSelector);
  }
}
