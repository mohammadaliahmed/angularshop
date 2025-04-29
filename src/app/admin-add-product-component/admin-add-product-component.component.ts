import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environmentConstants } from '../shared/constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-add-product-component',
  imports: [FormsModule, RouterModule],
  templateUrl: './admin-add-product-component.component.html',
  styleUrl: './admin-add-product-component.component.css'
})
export class AdminAddProductComponentComponent {

  constructor(private router: Router) { }

  name: string = ""
  price: number = 0
  description: string = ""
  coverImage: string = ""
  http = inject(HttpClient)
  errorFromServer = ""

  OnSaveProduct() {
    this.errorFromServer = ""
    this.http.post(environmentConstants.apiUrl + "/product", {
      name: this.name,
      price: this.price,
      description: this.description,
      coverImage: this.coverImage,
    }).subscribe({
      next: (Response) => {
        this.errorFromServer = ""
      }, error: (error) => {
        this.errorFromServer = error.error.message
      }
    })

  }
  OnCancel() {
    this.router.navigate(['admin'])
  }
}
