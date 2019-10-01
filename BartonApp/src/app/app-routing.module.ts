import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from 'src/app/home';
import { Scheduler } from 'src/app/scheduler';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'scheduler', component: Scheduler },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
