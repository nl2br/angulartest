import { Component, OnInit } from '@angular/core';
import { Student } from '../../app/student';
import { StudentService } from '../../app/student.service';
import { NotificationService } from '../notification.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Array<Student>;
  currentStudent: Student;
  // formulaire par le code
  nameCtrl: FormControl
  lastnameCtrl: FormControl
  ageCtrl: FormControl
  emailCtrl: FormControl
  studentForm: FormGroup
  

  // executer lorsque le composant se créer
  constructor(private studentService: StudentService, private notificationService: NotificationService, fb: FormBuilder, private title: Title) {
    // construction du formulaire
    this.nameCtrl = fb.control('', [Validators.required, Validators.minLength(10)])
    this.lastnameCtrl = fb.control('', [Validators.required, Validators.minLength(10)])
    this.ageCtrl = fb.control('')
    this.emailCtrl = fb.control('', Validators.email)
    this.studentForm = fb.group({
      name: this.nameCtrl,
      lastname: this.lastnameCtrl,
      age: this.ageCtrl,
      email: this.emailCtrl
    })
    
  }

  // executer lorsque le composant est prêt
  ngOnInit() {
    this.listStudents()
    this.title.setTitle("Student list")
  }

  filterAge(){
    let temp = []
    this.studentService.listFilter()
      .pipe(
        filter(item => item.age > 30)
      )
      .subscribe({
        next: item => temp.push(item),
        error: error => console.log(error),
        complete: () => console.log('done')
      })
      this.students = temp
  }

  listStudents(){

    this.studentService.list().subscribe({
      next: items => this.students = items,
      error: error => console.log(error),
      complete: () => console.log('done')
    })
    console.log(this.students)
  }

  listStudentsInitial(){
    let temp = []
    this.studentService.listFilter()
      .pipe(
        map(item => {
          item.nom = item.nom.substr(0,1)
          item.prenom = item.prenom.substr(0,1)
          return item
        })
      )
      .subscribe({
        next: item => temp.push(item),
        error: error => console.log(error),
        complete: () => console.log('done')
      })
      this.students = temp
  }

  infoStudent(current: Student){
    this.currentStudent = current
  }

  // submit pour le form par le code
  formSubmit(){
    console.log('student form', this.studentForm)
    console.log('student by code', this.studentForm.value)
    // on créer le student
    let student: Student = new Student(this.studentService.getNewId(),this.studentForm.value.name, this.studentForm.value.lastname,77,"","","")
    // si il a un email on lui ajoute
    if(this.studentForm.value.email){
      student.email = this.studentForm.value.email
    }
    // on envoie au service
    this.studentService.add(student)
    this.notificationService.add(`new added student ${this.studentForm.value.name}`)
    this.reset()
  }

  debug(){
    console.log('name',this.nameCtrl)
    console.log('email',this.emailCtrl)
    console.log('studentForm',this.studentForm)
  }

  reset(){
    this.nameCtrl.setValue('')
    this.lastnameCtrl.setValue('')
    this.ageCtrl.setValue('')
    this.emailCtrl.setValue('')
  }

}
