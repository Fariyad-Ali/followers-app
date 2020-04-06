import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  form= new FormGroup({
topics:new FormArray([])
  });

  addTopic(topic:FormControl){

    this.topics.push(new FormControl(topic.value));
  }
  get topics(){
    return this.form.get('topics')as FormArray;
  }
  removeTopic(topic:FormControl){
    let index= this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
