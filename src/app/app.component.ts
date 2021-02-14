import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../app/userService'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  isSearching: boolean;
  constructor(public userService: UserService){ }

  ngOnInit() {
    this.userService.cast.subscribe(data => this.isSearching = data);
  }
  
  title = 'my-app';
} 