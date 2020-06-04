import { Component, OnInit } from '@angular/core';
import{ SoftwareCoursesService} from './software-courses.service';
@Component({
  selector: 'app-software-courses',
  templateUrl: './software-courses.component.html',
  styleUrls: ['./software-courses.component.scss']
})
export class SoftwareCoursesComponent implements OnInit {

  softwarecourses = [];
  constructor(private softwareCourses : SoftwareCoursesService) { }

  ngOnInit() {
    this.softwareCourses.getCourses().subscribe((data: any[])=> {
      console.log(data);
      this.softwarecourses = data;
    })
  }

}
