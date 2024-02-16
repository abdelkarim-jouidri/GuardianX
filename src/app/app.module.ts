import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { AuthHttpInterceptor } from './_helpers/interceptors/auth-http.interceptor';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ForbiddenComponent } from './shared/forbidden/forbidden.component';
import { LoginRegisterSwitcherComponent } from './shared/login-register-switcher/login-register-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    RegisterComponent,
    HomePageComponent,
    NavbarComponent,
    ForbiddenComponent,
    LoginRegisterSwitcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass : AuthHttpInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
