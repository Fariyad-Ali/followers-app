import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  submit()
  {
    this.router.navigate(['/followers'],
    {
      queryParams:{page:1,next:false}
    }
    );
  }
  ngOnInit() {

    this.route.paramMap.subscribe(param=>{
      console.log(param.get('id'));
    });
  }

}
