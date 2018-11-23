import { Component, OnInit } from '@angular/core';
import { View } from '../view';
import { VIEWS } from '../mock-views';

@Component({
  selector: 'app-views-list',
  templateUrl: './views-list.component.html',
  styleUrls: ['./views-list.component.scss']
})
export class ViewsListComponent implements OnInit {

  listTitle = 'favorite views'; //ça va pas rester
  views = VIEWS; //à remplacer par un service

  constructor() { }

  ngOnInit() {
  }

}
