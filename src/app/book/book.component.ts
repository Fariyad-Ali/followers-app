import { BookService } from './book.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl:'./book.Component.html',
  styleUrls:['./book.Component.css']
 // <button>save</button>
  
  //<h3>{{title}}</h3>

  //<h3>{{price | currency:'INR':true }}</h3>
  //<ul>
  //<li *ngFor="let book of books">
  //{{book}}
   //</li>
  //</ul>
  //<button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="color">save</button>
  //<input [(ngModel)]="email" (keyup.enter)="onPress(email.value)"/>
  
  //styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() isSelected:boolean
  @Output() click=new EventEmitter();
   title="this is title of a book";
  books=["sql","rdbms"];
  price=128.0;
  email="hello.com@gmail.com";
  color="green";
  isActive=false;
  constructor(service:BookService) {

    this.books=service.getBooks();
   }
  getTitle(){
    return "this is return from function"
  }
  onClick(){
    console.log("clikcced");
  }

  onPress(){
    this.click.emit(this.isSelected);
    console.log("hi pressed"+this.email);

  }

  getBook (){
    return this.books;
  }
  ngOnInit() {
  }

}
