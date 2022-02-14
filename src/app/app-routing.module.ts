import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { profileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'profile',component:profileComponent}
  // {path:'landing',component:LandingComponent}
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
