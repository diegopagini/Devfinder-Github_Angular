import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DevComponentsModule } from '../../components/dev-components.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, DevComponentsModule],
})
export class SearchModule {}
