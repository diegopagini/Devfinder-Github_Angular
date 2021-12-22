import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [SearchComponent],
})
export class SearchModule {}
