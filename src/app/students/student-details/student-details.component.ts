import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Student } from '../student.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  
  @Input() student: Student;
  @ViewChild('courseInput') courseInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddCourse(){
    let course = this.courseInput.nativeElement.value;
    this.student.courses.push(course);
  }
}
