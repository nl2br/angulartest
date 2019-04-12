import { Injectable } from '@angular/core';
import { students, Student } from '../app/student';
import { from, of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  listStudents: Array<Student> = students;

  constructor() {}

  list():Observable<Student[]>{
    return of(this.listStudents);
  }

  listFilter():Observable<Student>{
    return from(this.listStudents);
  }

  get(id: number):Observable<Student>{
    return of(this.listStudents.find(item => item.id === id))
  }

  add(student: Student){
    this.listStudents.push(student)
  }

  getNewId(){
    return this.listStudents.length + 1
  }

}
