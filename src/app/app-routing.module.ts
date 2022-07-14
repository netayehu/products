import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { AboutComponent } from './components/about/about.component';
import { Page404Component } from './components/page404/page404.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ProDetailsComponent } from './components/pro-details/pro-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';



const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"welcome", component: LayoutComponent, children:[
    {path:"main", component: MainComponent},
    {path:'products', component: ProductsComponent},
    {path:'add-product', component: AddProductComponent},
    {path:'product-details/:id', component: ProDetailsComponent},
    {path:"about", component: AboutComponent}
  ]},
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 