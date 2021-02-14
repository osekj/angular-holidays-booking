import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService'
import { SearchRegionService } from '../searchRegionService'
import { SearchFiltersService } from '../searchFiltersService'
import { MyFilter } from '../filter';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  isSearching: boolean;
  region: String;
  filter: MyFilter;
  
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
