import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UserComponentsModule } from '../../components/user-components.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, UserComponentsModule, SharedComponentsModule],
})
export class DashboardModule {}
