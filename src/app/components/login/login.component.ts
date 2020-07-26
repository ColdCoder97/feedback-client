import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: User = new User();
msg = "";

  constructor(private service: RegistrationService,
    private router:Router,
    private _flashMessage: FlashMessagesService
    ) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data => {console.log("response recieved");
      this._flashMessage.show('You are LoggedIn', { cssClass: 'alert-success', timeout: 2000 });
      this.gotoList();

    } ,
      error => {   
      console.log("Exception occured");
      this._flashMessage.show('Invalid Credential', { cssClass: 'alert-danger', timeout: 2000 });
      // this.msg = "Bad credentials,Please enter valid Employee Id and Password";
      }
      )
      
 }

 
 gotoList() {
  this.router.navigate(['/home']);
}

gotoRegisteration(){
  this.router.navigate(['/register']);
}

}
