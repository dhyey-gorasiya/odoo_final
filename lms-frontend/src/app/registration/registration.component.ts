import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../_model/users';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: Users = new Users();
  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }



  goToUsersList() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    console.log(this.user);
    this.goToUsersList();
  }

}
