import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   course= [
     {'id':1,'name':'Learn Engineering','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/engineering.png'},
     {'id':2,'name':'Learn IT','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/IT.jpg'},
     {'id':3,'name':'Learn Economics','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/economics.jpg'},
     {'id':4,'name':'Learn Graphic design','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry','image':'../../assets/graphic.jpg'}
   
    ]
}
