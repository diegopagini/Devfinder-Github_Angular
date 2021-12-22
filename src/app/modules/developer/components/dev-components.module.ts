import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';

const components = [SearchModule];

@NgModule({
  imports: [CommonModule, components],
  exports: [components],
})
export class DevComponentsModule {}
