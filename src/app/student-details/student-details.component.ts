import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student

  constructor(private studentService: StudentService,private route:ActivatedRoute) {

   }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.student = this.studentService.details(Number(id))
  }

}
