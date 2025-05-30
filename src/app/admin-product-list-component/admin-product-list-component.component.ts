import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environmentConstants } from '../shared/constants';

@Component({
  selector: 'app-admin-product-list-component',
  imports: [],
  templateUrl: './admin-product-list-component.component.html',
  styleUrl: './admin-product-list-component.component.css'
})
export class AdminProductListComponentComponent {


  http = inject(HttpClient)
  productList: any[] = [];
  ngOnInit(): void {
    this.http.get<any[]>(environmentConstants.apiUrl + "/product").subscribe((response) => {
      this.productList = response;
    })
  }



}
