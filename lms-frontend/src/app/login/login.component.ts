import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private credentialsUrl = 'assets/credentials.json';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() { }

  login(loginForm: NgForm) {
    const email = loginForm.value.username;
    const password = loginForm.value.password;

    this.http.get<any>(this.credentialsUrl).subscribe(data => {
      if (email === data.email && password === data.password) {
        this.router.navigate(['/book-detail']);
      } else {
        this.router.navigate(['/student-home']);
      }
    }, error => {
      console.error('Error fetching credentials:', error);
    });
  }
}
