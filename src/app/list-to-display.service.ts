import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ListToDisplay } from './listToDisplay';
// import { LISTTODISPLAY1, LISTTODISPLAY2 } from '../assets/mock-lists';
// import "list1" from '../assets/data'
// import "list2" from '../assets/data'

@Injectable({
  providedIn: 'root'
})
export class ListToDisplayService {

  constructor(private http: HttpClient) { }

  // getListToDisplay1(): Observable<ListToDisplay> {
  //   return of(LISTTODISPLAY1);
  // }
  //
  // getListToDisplay2(): Observable<ListToDisplay> {
  //   return of(LISTTODISPLAY2);
  // }

  getListToDisplay(idList: number): Observable<ListToDisplay> {
    return this.http.get<ListToDisplay>(`assets/data/list${idList}.json`)
  }

}
