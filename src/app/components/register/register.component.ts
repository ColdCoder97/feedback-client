import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/service/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  msg = "";

  constructor(private service: RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.service.registerUser(this.user).subscribe(
      data => {console.log("response recieved");
      this.msg= "Registration Successful";
      this.gotoList();
     } ,
      error => {
        console.log("Exception occured");
        this.msg= error.error;
        
    }
      )
 }
 gotoList() {
  this.router.navigate(['/login']);
}


}
