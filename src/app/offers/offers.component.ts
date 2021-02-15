import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService'
import { SearchRegionService } from '../searchRegionService'
import { SearchFiltersService } from '../searchFiltersService'
import { MyFilter } from '../filter';
import { MyOffer } from '../offer';

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
    new MyOffer('1', 'Bangkok', new Date('2021-01-01'), 6000, 5, 7, "assets/img/bangkok.jpg"),
    new MyOffer('2', 'Laos', new Date('2021-10-01'), 10000, 3, 14, "assets/img/laos.jpg"),
    new MyOffer('3', 'Vietnam', new Date('2021-01-01'), 7000, 5, 12, "assets/img/vietnam.jpg")
  ];
  
  constructor(public userService: UserService, 
              public searchService: SearchRegionService,
              public searchFiltersService: SearchFiltersService) { }

  goBackClick() {
    this.searchFiltersService.clearFilter();
    this.searchService.search('');
    this.userService.toggleSearching();
  }   

  ngOnInit() {
    this.userService.cast.subscribe(data => this.isSearching = data);
    this.searchService.cast.subscribe(data => this.region = data);
    this.searchFiltersService.cast.subscribe(data => this.filter = data);
  }

}
