import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HometestComponent } from './hometest/hometest.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'test', component: HometestComponent},
  { path: 'sample', component: Test1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
