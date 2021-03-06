import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService'
import { SearchRegionService } from '../searchRegionService'
import { SearchFiltersService } from '../searchFiltersService'
import { MyFilter } from '../filter';
import { MyOffer } from '../offer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  isSearching: boolean;
  region: String;
  filter: MyFilter;

  offers = [
    new MyOffer('1', 'Thailand', 'Asia', 'Bangkok', new Date('2021-01-01'), 6000, 5, 7, "assets/img/offers/bangkok.jpg"),
    new MyOffer('2', 'Laos', 'Asia', 'Laos', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/laos.jpg"),
    new MyOffer('3', 'Vietnam', 'Asia', 'Vietnam', new Date('2021-01-01'), 7000, 5, 12, "assets/img/offers/vietnam.jpg"),
    new MyOffer('2', 'Bali', 'Asia', 'Hardrock Hotel', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/hardrock.jpg"),
    new MyOffer('3', 'Bali', 'Asia', 'Amnakila Hotel - Feel the luxury', new Date('2021-01-01'), 7000, 5, 12, "assets/img/offers/amnakila.jpg"),

    new MyOffer('2', 'Spain', 'Europe', 'Madrid', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/madrid.jpg"),
    new MyOffer('3', 'Spain', 'Europe', 'Sevilla', new Date('2021-01-01'), 7000, 5, 12, "assets/img/offers/sevilla.jpg"),
    new MyOffer('1', 'France', 'Europe', 'Paris', new Date('2021-01-01'), 6000, 5, 7, "assets/img/offers/paris.jpg"),
    new MyOffer('2', 'Italy', 'Europe', 'Rome', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/rome.jpg"),
    new MyOffer('1', 'Italy', 'Europe', 'Neapol', new Date('2021-01-01'), 6000, 5, 7, "assets/img/offers/neapol.jpg"),
    new MyOffer('2', 'Italy', 'Europe', 'Hotel Artemide in Rome', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/hotel-artemide.jpg"),

    new MyOffer('2', 'USA', 'USA', 'Boston', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/boston.jpg"),
    new MyOffer('1', 'USA', 'USA', 'New York City', new Date('2021-01-01'), 6000, 5, 7, "assets/img/offers/newyork.jpg"),
    new MyOffer('2', 'USA', 'USA', 'California - Los Angeles, San Francisco, Alcatraz', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/california.jpg"),

    new MyOffer('2', 'Chile', 'South America', 'Santiago', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/santiago.jpg"),
    new MyOffer('1', 'Chile', 'South America', 'Discover Chile - round trip', new Date('2021-01-01'), 6000, 5, 7, "assets/img/offers/chile.jpg"),
    new MyOffer('2', 'Brasil', 'South America', 'Rio de Janeiro - discovering the city', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/rio.jpg"),
    new MyOffer('2', 'Brasil', 'South America', 'Salvador - Brasilian Renaissance', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/salvador.jpg"),
    new MyOffer('2', 'Brasil', 'South America', 'Hotel Windsor Plaza in Rio de Janeiro', new Date('2021-10-01'), 10000, 3, 14, "assets/img/offers/windsorplaza.jpg")
  ];

  offersToDisplay: MyOffer[];
  
  constructor(public userService: UserService, 
              public searchService: SearchRegionService,
              public searchFiltersService: SearchFiltersService,
              public router: Router) { }

  goBackClick() {


    this.searchFiltersService.clearFilter();
    this.searchService.search('');
    this.userService.toggleSearching();
  }   

  ngOnInit() {
    this.userService.cast.subscribe(data => this.isSearching = data);
    this.searchService.cast.subscribe(data => this.region = data);
    this.searchFiltersService.cast.subscribe(data => this.filter = data);

    this.offersToDisplay = this.offers.filter(offer => (offer.region === this.region || offer.country === this.filter.country));
  }

}
