import { Component, OnInit } from '@angular/core';
import { Student } from '../../app/student';
import { StudentService } from '../../app/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<Student>;
  currentStudent: Student;

  constructor(studentService: StudentService) {
    this.students = studentService.list()
   }

  ngOnInit() {}

  infoStudent(current: Student){
    this.currentStudent = current
  }
}
