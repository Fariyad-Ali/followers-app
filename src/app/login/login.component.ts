import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:any
  //queryparam:RouterLinkActive;
  constructor(private routee:ActivatedRoute,private route:Router,private authService:AuthService) { }

  ngOnInit() {
  }

  signIn(credentials){
  this.authService.login(credentials)
  .subscribe(response=>{
     if(response)
     {
       let returnUrl=this.routee.snapshot.queryParamMap.get("returnUrl");
       this.route.navigate([returnUrl || '/']);

     }
     else
     this.invalidLogin=true;
     
  });
  }

}
