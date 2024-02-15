import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthenticationGuard } from './_helpers/guards/authentication.guard';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/login" , pathMatch : "full"},
  {path:"admin", component:AdminComponent , canActivate:[AuthenticationGuard]},
  {path:"user", component:UserComponent},
  {path:"home", component:HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
