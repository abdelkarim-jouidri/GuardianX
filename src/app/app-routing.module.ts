import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthenticationGuard } from './_helpers/guards/authentication.guard';
import { AdminGuard } from './_helpers/guards/admin.guard';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"", redirectTo:"/login" , pathMatch : "full"},
  {path:"admin", component:AdminComponent , canActivate:[AuthenticationGuard, AdminGuard]},
  {path:"user", component:UserComponent , canActivate: [AuthenticationGuard]},
  {path:"home", component:HomePageComponent , canActivate: [AuthenticationGuard]},
  {path:"unauthorized", component:ForbiddenComponent },
  {path:"register", component:RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
