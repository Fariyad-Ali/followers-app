import { SignupFormComponent } from './signup-form/signup-form.component';
//import { BookService } from './book/book.service';
//import { CourseComponent } from './course/course.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { BookComponent } from './book/book.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { PostService } from 'services/post.service';
import { AppErrorHandler } from './common/validators/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from 'services/github-followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { GitHubProfileComponent } from './git-hub-profile/git-hub-profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from 'services/auth.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,


    //CourseComponent,
   // BookComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseComponent,
    ChangePasswordComponent,
    HttpDemoComponent,
    GithubFollowersComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponentComponent,
    GitHubProfileComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {path:'',component:NavbarComponent},
        {path:'login',component:LoginComponent},
        {path:'admin',component:AdminComponent,canActivate:[AuthGuardService]},
     {path:'',component:HomeComponentComponent},
     {path:'followers/:id/:username',component:GitHubProfileComponent},
     {path:'followers',component:GithubFollowersComponent},
     {path:'posts',component:HttpDemoComponent},
     {path:'**',component:NotFoundComponent},
     
      ]
    )
  ],
  providers: [
    //BookService,
    PostService,
    GithubFollowersService,
    AuthService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    AuthGuardService
    //{provide:ErrorHandler,useClass:AppErrorHandler}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
