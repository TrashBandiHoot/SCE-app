import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInMainComponent } from './check-in-main/check-in-main.component';
import { AssetsMainComponent } from './assets-main/assets-main.component';

 const routes: Routes = [
  { path: 'check-in', component: CheckInMainComponent },
  { path: 'installation', component: AssetsMainComponent }
 ]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
