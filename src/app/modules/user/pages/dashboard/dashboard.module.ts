import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UserComponentsModule } from '../../components/user-components.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, UserComponentsModule],
})
export class DashboardModule {}
