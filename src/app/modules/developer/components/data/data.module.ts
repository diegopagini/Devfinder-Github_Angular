import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [DataComponent],
  imports: [CommonModule, MaterialModule],
  exports: [DataComponent],
})
export class DataModule {}
