import { Component, Input, OnInit } from '@angular/core';
import { off } from 'process';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  @Input() id: string;
  @Input() offerName: string;
  @Input() departureDate: Date;
  @Input() days: number;
  @Input() price: number;
  @Input() people: number;
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {
  }

}
