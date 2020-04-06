import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

contactType=[

  {
    id:1, name:"Email"
  },
  {
    id:2,name:"Mobile"
  }
];
  log(fName){
    console.log(fName);
  }
  submit(f)
  {
    console.log(f.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
