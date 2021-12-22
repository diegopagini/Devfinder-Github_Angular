import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchModule } from './search/search.module';
import { DataModule } from './data/data.module';

const components = [SearchModule, DataModule];

@NgModule({
  imports: [CommonModule, components],
  exports: [components],
})
export class DevComponentsModule {}
