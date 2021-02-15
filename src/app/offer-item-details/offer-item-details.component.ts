import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offer-item-details',
  templateUrl: './offer-item-details.component.html',
  styleUrls: ['./offer-item-details.component.css']
})
export class OfferItemDetailsComponent implements OnInit {

  image: string;
  description: string;

  constructor(private location: Location, private route: ActivatedRoute) { }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params);
      this.image = params['image'];
      this.description = params['description']
    })
  }

}
