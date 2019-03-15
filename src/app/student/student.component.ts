import { Component, OnInit } from '@angular/core';
import { Student } from '../../app/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<Student> = [
    new Student('arnorld','etwillie', 16, 'S', 'Classe 1', 'abruti'),
    new Student('émile','labille', 16, 'S', 'Classe 1', 'abruti'),
    new Student('coquille','stjacques', 16, 'S', 'Classe 1', 'abruti'),
    new Student('louis','futon', 16, 'S', 'Classe 1', 'abruti')
  ]

  currentStudent: Student;

  constructor() { }

  ngOnInit() {
    console.log(this.students);
  }

  infoStudent(current: Student){
    this.currentStudent = current
  }
}
