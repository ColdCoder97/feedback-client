import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedbackListComponent } from './components/feedback-list/feedback-list.component';
import { AddFeedbackComponent } from './components/add-feedback/add-feedback.component';
import { RegistrationService } from './service/registration.service';
import { FeedbackService } from './service/feedback.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    FeedbackListComponent,
    AddFeedbackComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HomeComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    FlashMessagesModule.forRoot(),

  ],
  providers: [FeedbackService,RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
