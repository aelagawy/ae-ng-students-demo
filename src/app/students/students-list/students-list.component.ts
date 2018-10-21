import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  
  title = "students";
  students: Student[];
  selectedStudent: Student;
  editMode: boolean;

  constructor() { }

  ngOnInit() {
    this.students = [
      {id: 1, name: "Balamita", email: "balamits@domain.org", courses: ["Angular", "JS"]},
      {id: 2, name: "Ibrahim", email: "ibrahim@domain.org", courses: ["Angular"]},
      {id: 3, name: "Mohammed", email: "mohammed@domain.org", courses: []},
      {id: 4, name: "Mahmoud", email: "mahmoud@domain.org", courses: []},
      {id: 5, name: "Ahmad", email: "ahmad@domain.org", courses: [
        "Angular",
        "React",
        "Xamarin"
      ]}
    ];
  }

  onSelectStudent(student: Student){
    this.selectedStudent = student;
    this.editMode = false;
  }

  onEditStudent(studentId: number){
    this.selectedStudent = this.students.find(s => s.id == studentId);
    this.editMode = true;
  }

  onDeleteStudent(studentId: number){
    const index = this.students.findIndex(s => s.id == studentId);
    this.students.splice(index, 1);

    if(this.selectedStudent.id == studentId)
      this.selectedStudent = null;
  }

}
