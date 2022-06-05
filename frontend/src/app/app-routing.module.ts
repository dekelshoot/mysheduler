import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './auth/sigin/sigin.component';
import { SigupComponent } from './auth/sigup/sigup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartComponent } from './start/start.component';
import { ChoiceComponent } from './choice/choice.component';

const routes: Routes = [
  { path: 'start', component: StartComponent} ,
  { path: 'auth/signin', component: SiginComponent} ,
  { path: 'auth/signup', component: SigupComponent} ,
  { path: 'dashboard', component: DashboardComponent} ,
  { path: 'choice', component: ChoiceComponent} ,


  { path : '' , redirectTo: 'start', pathMatch: 'full'},
  { path : '**' , redirectTo: 'start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
