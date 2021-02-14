import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
   public isSearching = new BehaviorSubject<boolean>(false);
   cast = this.isSearching.asObservable();

   constructor() { }

   toggleSearching(){
      this.isSearching.next(!this.isSearching.value);
      console.log(this.isSearching.value);
   }
}