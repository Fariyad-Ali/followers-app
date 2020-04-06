import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from "rxjs/operators"; 
import  {JwtHelper, tokenNotExpired} from 'angular2-jwt';
@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials)).pipe(map(
     response=>{
       let result = response.json();
       console.log(result);
               if(result && result.token){
                 localStorage.setItem("token",result.token);
               return true;
               }
               else return false;
     }
      ));
  }

  logout() { 
    localStorage.removeItem("token");
  }

  isLoggedIn() { 

   return  tokenNotExpired();

   // let jwtHelper = new JwtHelper();

   // let token = localStorage.getItem("token");


//console.log(jwtHelper.isTokenExpired(token));
//    return jwtHelper.isTokenExpired(token);
  }
    getCurrentUser(){
      let token = localStorage.getItem("token");
      if(!token)
      return null;
      let decoded=new JwtHelper().decodeToken(token);
      console.log(decoded);
      console.log(new JwtHelper().decodeToken(token));
      return (new JwtHelper().decodeToken(token));
    }
}

