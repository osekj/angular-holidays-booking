import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { MyFilter } from '../app/filter';

@Injectable()
export class SearchFiltersService {   
    public filter = new BehaviorSubject<MyFilter>(new MyFilter());
    cast = this.filter.asObservable();

    constructor() { }

    applyFilters(filter) {
        this.filter.next(filter);
    }

    getFilter(): Observable<MyFilter> {
        return this.filter.asObservable();
    }

    clearFilter() {
        this.filter.next(new MyFilter());
    }
}