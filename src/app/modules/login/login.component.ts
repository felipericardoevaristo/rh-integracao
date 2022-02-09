import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor(private fb: FormBuilder, private loginService: LoginService) {  }
  
   myform: FormGroup = this.fb.group({
      user : ['', Validators.required],
      password : ['', Validators.required]
  }); 

   ngOnInit() {
   }
 
  get user(){ return this.myform?.get('user'); }
  get password(){ return this.myform?.get('password'); }
  
  login() {
     let values = JSON.stringify(this.myform?.value);
     console.debug(values);
     let user : String;
     let password : String;
     user = this.myform?.value.user;
     password = this.myform?.value.password;
   /*  if ( this.loginService.autenticaUser(user, password)) {
       alert(`Usuario ${user} autenticado.`);
     } else {
       alert(`erro ao autenticar ${user}.`);
     } */
   }

}
