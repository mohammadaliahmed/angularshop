import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environmentConstants } from '../shared/constants';

@Component({
  selector: 'app-home-products',
  imports: [],
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.css'
})
export class HomeProductsComponent {
  http = inject(HttpClient)
  productList: any[] = [];
  ngOnInit(): void {
    this.http.get<any[]>(environmentConstants.apiUrl + "/product").subscribe((response) => {
      this.productList = response;
    })
  }


}
