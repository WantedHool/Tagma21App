import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { DownSyndromePageComponent } from './down-syndrome-page/down-syndrome-page.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { PurposeComponent } from './purpose/purpose.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    DownSyndromePageComponent,
    ContactComponent,
    ProductsComponent,
    PurposeComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
