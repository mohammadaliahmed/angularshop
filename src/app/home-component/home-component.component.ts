import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { HomeProductsComponent } from '../home-products/home-products.component';

@Component({
  selector: 'app-home-component',
  imports: [SliderComponent,NavigationComponent,HomeProductsComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
