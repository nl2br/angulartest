import { Component, OnInit } from '@angular/core';
import { Student } from '../../app/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<Student> = [
    new Student('arnorld','etwillie'),
    new Student('émile','labille'),
    new Student('coquille','stjacques'),
    new Student('louis','futon')
  ]

  currentStudent: Student;

  constructor() { }

  ngOnInit() {
    console.log(this.students);
  }

  info(current: number){
    let selectedStudent: Student;
    this.students.forEach((item: Student, index: number) => {
      console.log(index, current)
      if(index === current){
        selectedStudent = item
      }
    });
    console.log('selectedStudent: ',selectedStudent)
    this.currentStudent = selectedStudent
  }

}
