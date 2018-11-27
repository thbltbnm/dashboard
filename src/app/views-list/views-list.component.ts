import { Component, OnInit, Input } from '@angular/core';

import { ListToDisplay } from '../listToDisplay';

@Component({
  selector: 'app-views-list',
  templateUrl: './views-list.component.html',
  styleUrls: ['./views-list.component.scss']
})
export class ViewsListComponent implements OnInit {
  @Input() listToDisplay: ListToDisplay;

  constructor() { }

  ngOnInit() {
  }

}
