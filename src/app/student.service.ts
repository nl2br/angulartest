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

  details(id: number){
    console.log('liste',this.listStudents)
    console.log('id',id)
    let student = this.listStudents.filter(item => item.id === id)
    console.log('find',this.listStudents)
    return student[0]
  }

  add(student: Student){
    this.listStudents.push(student)
  }
}
