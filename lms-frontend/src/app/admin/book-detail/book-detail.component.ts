import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from 'src/app/_service/api.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  source: any[] = []
  book: any =[]

  public baseurl = "http://localhost:3000/"
  constructor(private apiService: ApiService,) { }

  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks(){
    this.apiService
      .sendGetRequest(`${this.baseurl}book/all`)
      .subscribe(
        (res) => {
          this.source = res.data

        },
        (error) => {
          console.error(error)
        }
      )
  }
}
