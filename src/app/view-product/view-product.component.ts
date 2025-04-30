import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environmentConstants } from '../shared/constants';
import { NavigationComponent } from '../navigation/navigation.component';
import { HomeProductsComponent } from "../home-products/home-products.component";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-view-product',
  imports: [NavigationComponent, HomeProductsComponent],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {
  productId: number = 0
  userId: any;
  constructor(private route: ActivatedRoute, private cookie: CookieService) { }
  http = inject(HttpClient)
  product: any = {}
  isloggedIn: boolean = false
  addedToCart: boolean = false

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id']
      this.http.get(environmentConstants.apiUrl + "/product/" + this.productId).subscribe(
        (data: any) => {
          this.product = data
        },
        (error: any) => {
          console.log(error)
        }
      )
    })
    this.userId = +this.cookie.get('userId');
    if (this.userId != null && this.userId > 0) {
      this.isloggedIn = true
    }
  }

  AddToCart(productId: number) {
    this.addedToCart=false
    this.http.post(environmentConstants.apiUrl + "/cart/", {
      productId: productId,
      customerId: this.userId,
      quantity: 1
    }).subscribe({
      next: (data: any) => {
        console.log(data)
        this.addedToCart=true
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

}
