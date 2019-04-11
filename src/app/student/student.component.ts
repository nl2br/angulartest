import { Component, OnInit } from '@angular/core';
import { Student } from '../../app/student';
import { StudentService } from '../../app/student.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

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
  constructor(private studentService: StudentService, fb: FormBuilder) {
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
    // utilisation du service pour récupérer la liste des students
    this.students = this.studentService.list()
  }

  infoStudent(current: Student){
    this.currentStudent = current
  }

  addStudent(name: string){
    this.students.push(new Student(name,"",77,"","",""))
  }

  // submit pour le form par le template
  register(user){
    console.log('user',user)
    this.students.push(new Student(user.name, user.lastname,77,"","",""))
  }

  // submit pour le form par le code
  formSubmit(){
    console.log('student form', this.studentForm)
    console.log('student by code', this.studentForm.value)
    // on créer le student
    let student: Student = new Student(this.studentForm.value.name, this.studentForm.value.lastname,77,"","","")
    // si il a un email on lui ajoute
    if(this.studentForm.value.email){
      student.email = this.studentForm.value.email
    }
    // on envoie au service
    this.studentService.add(student)
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
