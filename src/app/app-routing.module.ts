import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './layouts/main/main.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LoginComponent } from './routes/login/login.component';
import { ProfileComponent } from './routes/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dash', component: DashboardComponent },
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'profile', component: ProfileComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
