import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  source: any[] = []
  source1: any[] = []
  book: any =[]
  public baseurl = "http://localhost:3000/"
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getAllBooks1()
    this.getAllBooks2()
  }

  getAllBooks1(){
    this.apiService
      .sendGetRequest(`${this.baseurl}book/status/trending`)
      .subscribe(
        (res) => {
          this.source = res.data
        },
        (error) => {
          console.error(error)
        }
      )
  }

  getAllBooks2(){
    this.apiService
      .sendGetRequest(`${this.baseurl}book/status/arriving`)
      .subscribe(
        (res) => {
          this.source1 = res.data
        },
        (error) => {
          console.error(error)
        }
      )
  }
}
