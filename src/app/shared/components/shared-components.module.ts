import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SpinnerModule } from './spinner/spinner.module';
import { NavbarModule } from './navbar/navbar.module';

const components = [HeaderModule, SpinnerModule, NavbarModule];
@NgModule({
  imports: [CommonModule, components],
  exports: [components],
})
export class SharedComponentsModule {}
