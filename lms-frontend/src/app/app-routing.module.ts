import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { BookDetailComponent } from './admin/book-detail/book-detail.component';
import { LibrainComponent } from './admin/librain/librain.component';
import { StudentDetailComponent } from './admin/student-detail/student-detail.component';
import { BookUploadComponent } from './admin/book-upload/book-upload.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
// import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  {path: 'books', component: BooksListComponent},
  {path: 'create-book', component: CreateBookComponent},
  {path: '', component: HomeComponent},
  {path: 'update-book/:bookId', component: UpdateBookComponent},
  {path: 'book-details/:bookId', component: BookDetailsComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'register-user', component: RegistrationComponent},
  {path: 'user-details/:userId', component: UserDetailsComponent},
  {path: 'update-user/:userId', component: UpdateUserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  {path: 'book-detail', component: BookDetailComponent},
  {path: 'librain', component: LibrainComponent},
  {path: 'student-detail', component: StudentDetailComponent},
  {path: 'book-upload', component: BookUploadComponent},
  {path: 'student-home', component: StudentHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
