import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperRoutingModule } from './developer-routing.module';
import { SearchModule } from './pages/search/search.module';

@NgModule({
  imports: [CommonModule, DeveloperRoutingModule, SearchModule],
})
export class DeveloperModule {}
