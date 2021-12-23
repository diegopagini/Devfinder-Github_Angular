import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'developer',
    loadChildren: () =>
      import('./modules/developer/developer.module').then(
        (m) => m.DeveloperModule
      ),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    redirectTo: '/developer',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/developer',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
