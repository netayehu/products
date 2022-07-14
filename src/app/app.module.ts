import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';

import { FormsModule } from '@angular/forms';

import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { LoginComponent } from './components/login/login.component';
import { RootComponent } from './components/root/root.component';
import { ProDetailsComponent } from './components/pro-details/pro-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideComponent,
    ProductsComponent,
    AboutComponent,
    ThumbnailComponent,
    LoginComponent,
    RootComponent,
    ProDetailsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
