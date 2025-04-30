import { Routes } from '@angular/router';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { ThankyouComponentComponent } from './thankyou-component/thankyou-component.component';
import { MyOrdersComponentComponent } from './my-orders-component/my-orders-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { AdminProductListComponentComponent } from './admin-product-list-component/admin-product-list-component.component';
import { AdminAddProductComponentComponent } from './admin-add-product-component/admin-add-product-component.component';
import { AdminOrdersComponentComponent } from './admin-orders-component/admin-orders-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ViewProductComponent } from './view-product/view-product.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { path: 'auth', component: AuthComponentComponent },
    { path: 'thank-you', component: ThankyouComponentComponent },
    { path: 'orders', component: MyOrdersComponentComponent },
    { path: 'cart', component: CartComponentComponent },
    { path: 'view-product/:id', component: ViewProductComponent },
    {
        path: 'admin',
        component:AdminLayoutComponent,
        children: [
            { path: 'product-list', component: AdminProductListComponentComponent },
            { path: 'add-product', component: AdminAddProductComponentComponent },
            { path: 'orders', component: AdminOrdersComponentComponent },
        ]
    },


];
