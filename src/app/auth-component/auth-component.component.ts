import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environmentConstants } from '../shared/constants';
import { CookieService } from 'ngx-cookie-service';
import { CustomerDto } from './customerDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  imports: [FormsModule],
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.css'
})
export class AuthComponentComponent {
  constructor(private cookie: CookieService,private route:Router) { }

  http = inject(HttpClient)
  registerObj: { email: string; password: string; name: string } = {
    email: '',
    password: '',
    name: ''
  };
  WhichForm = signal<string>("LoginForm");
  errorFromServer: string = "";

  OnToggleForm(val: string) {
    this.WhichForm.set(val)
  }

  OnLoginClicked() {
    this.errorFromServer = ""
    this.http.post(environmentConstants.apiUrl + "/customer/login", this.registerObj).subscribe({
      next: (response) => {
        const loginResponse = response as CustomerDto
        this.cookie.set('userId', loginResponse.id, { expires: 1, path: '/' }); // Cookie expires in 1 day
        this.route.navigate([''])

      },
      error: (error) => {
        console.log(error)
        this.errorFromServer = error.error.message
      }
    })
  } OnRegisterClicked() {
    this.errorFromServer = ""
    this.http.post(environmentConstants.apiUrl + "/customer/", this.registerObj).subscribe({
      next: (response) => {
        const loginResponse = response as CustomerDto
        this.cookie.set('userId', loginResponse.id, { expires: 1, path: '/' }); // Cookie expires in 1 day
        this.route.navigate([''])
      },
      error: (error) => {
        console.log(error)
        this.errorFromServer = error.error.message
      }
    })
  }
}
