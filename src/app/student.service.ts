import { Injectable } from '@angular/core';
import { students, Student } from '../app/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  listStudents: Array<Student> = students;

  constructor() {}

  list(){
    return this.listStudents;
  }

  add(student: Student){
    this.listStudents.push(student)
  }
}
