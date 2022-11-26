import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DownSyndromePageComponent } from './down-syndrome-page/down-syndrome-page.component';
import { MembersComponent } from './members/members.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ProductsComponent } from './products/products.component';
import { PurposeComponent } from './purpose/purpose.component';

const routes: Routes = [
  { path: 'news-page', component: NewsPageComponent},
  { path: 'down', component: DownSyndromePageComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'purpose', component:PurposeComponent},
  { path: 'members', component: MembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
