import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student

  constructor(private studentService: StudentService,private route:ActivatedRoute, private title:Title) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.studentService.get(Number(id)).subscribe({
      next: item => this.student = item,
      error: error => console.log(error),
      complete: () => console.log('done')
    })
    this.title.setTitle(`${this.student.nom} details`)
  }

}
