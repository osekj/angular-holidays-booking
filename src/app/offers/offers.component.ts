import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService'
import { SearchRegionService } from '../searchRegionService'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  isSearching: boolean;
  region: String;
  constructor(public userService: UserService, public searchService: SearchRegionService) { }

  goBackClick() {
    this.userService.toggleSearching();
  }   

  ngOnInit() {
    this.userService.cast.subscribe(data => this.isSearching = data);
    this.searchService.cast.subscribe(data => this.region = data);
  }

}
