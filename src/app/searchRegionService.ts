import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SearchRegionService {
   public region = new BehaviorSubject<String>('');
   cast = this.region.asObservable();

   constructor() { }

   search(region) {
        this.region.next(region);
   }
}