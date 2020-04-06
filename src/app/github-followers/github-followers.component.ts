import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from 'services/github-followers.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

   followrs:any[];

  constructor(private route:ActivatedRoute,private service:GithubFollowersService) { }

  ngOnInit() {
    Observable.combineLatest(
              [
                this.route.paramMap,
                this.route.queryParamMap
              ]

    ).subscribe(params=>{
                 console.log(params[0].get('id'));
                 console.log(params[1].get('page'));
    });
   this.service.getAll().
   subscribe(followersList => {this.followrs=followersList
    //console.log(followersList.l ;
  },(error:Response)=>{
    console.log(error.json());
  }
    );

  }

}
