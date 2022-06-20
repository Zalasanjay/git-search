import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadChildren:() => import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  { 
    path: 'details/:username',
    pathMatch: 'full',
    loadChildren:() => import('./views/user-details/user-details.module').then(m=>m.UserDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
