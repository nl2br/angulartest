import { Injectable } from '@angular/core';
import { Student } from '../app/student';
import { from, of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  listStudents: Array<Student>

  constructor(private http: HttpClient ) {}

  list():Observable<Student[]>{
    return this.http.get<Array<Student>>('fakeapi/students')
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
