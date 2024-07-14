import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  source: any[] = []
  user: any =[]
  public baseurl = "http://localhost:3000/"
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getAllstudent()
  }
  getAllstudent(){
    this.apiService
      .sendGetRequest(`${this.baseurl}user/all`)
      .subscribe(
        (res) => {
          this.source = res.data.users
        },
        (error) => {
          console.error(error)
        }
      )
  }
}
