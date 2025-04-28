import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-component',
  imports: [FormsModule],
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.css'
})
export class AuthComponentComponent {

  email: string = '';
  password: string = '';
  name: string = '';
  WhichForm = signal<string>("LoginForm");

  OnToggleForm(val: string) {
    this.WhichForm.set(val)
  }

  OnLoginClicked() {
    alert(this.email)
  } OnRegisterClicked() {
    alert("Register")
  }
}
