import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { areDevelopersSelector } from './core/store/selectors/app.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  developers$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.developers$ = this.store.select(areDevelopersSelector);
  }
}
