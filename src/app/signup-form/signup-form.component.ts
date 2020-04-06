import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserNameValidators } from './username-validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form=new FormGroup({
   username: new FormControl('',[
     Validators.required
     //Validators.minLength(2),
    // UserNameValidators.noSpace,
     
   ],UserNameValidators.uniqueUser),
   password:new FormControl('',Validators.required)
  });
  get username (){
    return this.form.get('username');
  }
  checkLogin(){
    console.log("check login");
    return this.form.setErrors({inValidLogin:true});
  }
}
