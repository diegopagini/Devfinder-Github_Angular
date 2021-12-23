import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

@NgModule({
  imports: [CommonModule, UserRoutingModule, DashboardModule],
})
export class UserModule {}
