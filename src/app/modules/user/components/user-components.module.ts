import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListModule } from './list/list.module';

const components = [ListModule];
@NgModule({
  imports: [CommonModule, components],
  exports: [components],
})
export class UserComponentsModule {}
