import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ListToDisplay } from './listToDisplay';
import { LISTTODISPLAY1, LISTTODISPLAY2 } from '../assets/mock-lists';


@Injectable({
  providedIn: 'root'
})
export class ListToDisplayService {

  constructor() { }

  getListToDisplay1(): Observable<ListToDisplay> {
    return of(LISTTODISPLAY1);
  }

  getListToDisplay2(): Observable<ListToDisplay> {
    return of(LISTTODISPLAY2);
  }
}
