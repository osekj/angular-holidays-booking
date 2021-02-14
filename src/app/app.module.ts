import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { UserService } from '../app/userService'
import { SearchRegionService } from './searchRegionService'
import { SearchFiltersService } from './searchFiltersService'
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, SearchRegionService, SearchFiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
