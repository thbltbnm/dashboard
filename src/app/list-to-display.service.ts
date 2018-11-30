import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ListToDisplay } from './listToDisplay';

@Injectable({
  providedIn: 'root'
})
export class ListToDisplayService {

  constructor(private http: HttpClient) { }

  getListsToDisplay(): Observable<ListToDisplay[]> {
    return this.http.get<ListToDisplay[]>(`assets/data/lists.json`)
  }
}
