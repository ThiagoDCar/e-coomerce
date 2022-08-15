import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BookstoreComponent } from './bookstore/bookstore.component';
import { FiltersComponent } from './filters/filters.component';
import {ProductListComponent} from "./product-list/product-list.component";
import { ProductItemComponent } from './product-list/product-item/product-item.component'
import { HttpClient, HttpClientModule } from "@angular/common/http"
import { BooksService } from './product-list/product-list-component.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    FooterComponent,
    BookstoreComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
