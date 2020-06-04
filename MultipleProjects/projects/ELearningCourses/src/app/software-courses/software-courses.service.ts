import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoftwareCoursesService {

  private coursesAPI = "http://localhost:3000/softwarecourses";
  constructor(private httpClient: HttpClient) { }

  public getCourses(){
     return this.httpClient.get(this.coursesAPI);
  }
}
