import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../userService'
import { SearchRegionService } from '../searchRegionService'
import { SearchFiltersService } from '../searchFiltersService'
import { Router } from '@angular/router';
import { MyFilter } from '../filter';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isSearching: boolean;
  region: String;

  @ViewChild('searchForm')
  form: NgForm;

  country: string;
  departure: Date;
  people: number;
  priceFrom: number;
  priceTo: number;
  days: number;
  type: string;

  filter: MyFilter;

  constructor(public userService: UserService, 
              public searchService: SearchRegionService,
              public searchFiltersService: SearchFiltersService) { }
  
  onProposedClick(regionToSearch) {
    this.searchService.search(regionToSearch);
    this.userService.toggleSearching();
  }   

  filtersSearch() {
    // Not needed for developing
    // if(this.form.invalid) {
    //   alert("Invalid filter input");
    //   return;
    // }

    this.filter = new MyFilter(this.country, this.departure, this.people, this.priceFrom,
                                    this.priceTo, this.days, this.type);

    this.searchFiltersService.applyFilters(this.filter);
    this.userService.toggleSearching();
  }

  destinations = [
    'France',
    'Austria',
    'Spain',
    'Italy',
    'Vietnam',
    'Thailand',
    'Laos',
    'Bali',
    'USA',
    'Chile',
    'Brasil'
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
    this.searchFiltersService.cast.subscribe(data => this.filter = data);
  }

}
