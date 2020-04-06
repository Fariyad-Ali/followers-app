import { async } from '@angular/core/testing';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserNameValidators{

    static noSpace(control:AbstractControl):ValidationErrors|null{
       
        if((control.value as string).indexOf(' ') >=0)
        {
         return {
             noSpace:true
         }
        }
        else 
        return null;
    }

    static uniqueUser(control:AbstractControl):Promise<ValidationErrors|null>{
        return new Promise((resolve,reason)=>{
                console.log("async function");
            setTimeout(()=>{
                if(control.value === 'fariyad') {
                console.log(control.value) ;    
                   resolve({uniqueUser:true}) //{ uniqueUSer:true};
                } else
            {
                console.log("async function else");
                resolve(null);
            }
  
               },2000);

        });
       
            
    }
}