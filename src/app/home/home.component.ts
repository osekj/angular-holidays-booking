import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService'
import { SearchRegionService } from '../searchRegionService'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  isSearching: boolean;
  region: String;
  constructor(public userService: UserService, public searchService: SearchRegionService) { }
  
  onProposedClick(regionToSearch) {
    this.searchService.search(regionToSearch);
    this.userService.toggleSearching();
  }   

  destinations = [
    {country: 'France'},
    {country: 'Austria'},
    {country: 'Spain'},
    {country: 'Italy'},
    {country: 'Vietnam'},
    {country: 'Thailand'},
    {country: 'Laos'},
    {country: 'Bali'},
    {country: 'USA'},
    {country: 'Chile'},
    {country: 'Brasil'}
  ];

  types = [
    'Stay in a hotel',
    'Have a round trip',
    'Mix'
  ]

  date = new Date().toISOString().substring(0, 10)

  ngOnInit() {
    this.userService.cast.subscribe(data => this.isSearching = data);
    this.searchService.cast.subscribe(data => this.region = data);
  }

}
