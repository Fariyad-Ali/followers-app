import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { passwordValidators } from './password-validators';

@Component({
  selector: 'cp',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form=new FormGroup({
    oldP:new FormControl('',[Validators.required],passwordValidators.oldMismatched),
    newP:new FormControl('',Validators.required),
    conP:new FormControl('',Validators.required),
  });
  checkPass(form:FormGroup){
   let np=form.get('newP').value;
   let cp=form.get('conP').value;
   console.log("checking....");
     if(np!==cp){
       console.log("not equal");
       return this.form.setErrors({notMatch:true});
     }
  }
  get oldP (){
    return this.form.get('oldP');
  }
  get newP (){
    return this.form.get('newP');
  }

  get conP (){
    return this.form.get('newP');
  }
}
