import { AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';
export class passwordValidators{

    static oldMismatched(control:AbstractControl):Promise<ValidationErrors|null>{

    return new Promise((resolve,reason)=>{
        setTimeout(()=>{
        if(control.value !=='barkati')
        resolve({oldMismatched:true});
        else 
        resolve(null);},2000)
    });
      //  return null;
    }
}