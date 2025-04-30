import { Component, inject } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { environmentConstants } from '../shared/constants';

@Component({
  selector: 'app-cart-component',
  imports: [NavigationComponent],
  templateUrl: './cart-component.component.html',
  styleUrl: './cart-component.component.css'
})
export class CartComponentComponent {
  cartItems: any;

  constructor(private cookie: CookieService) { }
  http = inject(HttpClient)

  userId: number = 0;
  ngOnInit() {
    this.userId = parseInt(this.cookie.get("userId"))
    this.http.get(environmentConstants.apiUrl + "/cart/" + this.userId).subscribe({
      next: (data: any) => {
        this.cartItems = data
        console.log(this.cartItems)
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }
  DecreaseQuantity() {
    // Decrease the quantity of the item in the cart
  }
  IncreaseQuantity() {

  }
}
