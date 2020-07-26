import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'add-feedback', component: AddFeedbackComponent },
  { path: 'view-feedback', component: FeedbackListComponent },
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
