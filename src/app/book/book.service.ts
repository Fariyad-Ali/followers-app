import { Injectable, Optional } from '@angular/core';


export class BookService{
  name;
   constructor(@Optional() name:string){
   this.name=name;
    }

    getBooks()
    {
        return ["DBMS","SQL","DS"];
    }
}