import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  { path: 'HomeComponent', component: HomeComponent },
  { path: 'OffersComponent', component: OffersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
