import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';
import { SearchModule } from './pages/search/search.module';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/core/store/reducers/app.reducer';

@NgModule({
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    SearchModule,
    StoreModule.forFeature('app', appReducer),
  ],
})
export class DeveloperModule {}
