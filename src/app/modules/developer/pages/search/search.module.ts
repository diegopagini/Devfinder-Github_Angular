import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { DevComponentsModule } from '../../components/dev-components.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, DevComponentsModule, SharedComponentsModule],
})
export class SearchModule {}
