import { Component, OnInit } from '@angular/core';

import { ListToDisplay } from './listToDisplay';
import { ListToDisplayService } from './list-to-display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Page';
  lists: ListToDisplay[];

  constructor(private listToDisplayService: ListToDisplayService) { }

  ngOnInit() {
    this.loadListsToDisplay();
  }

  loadListsToDisplay(): void {
    this.listToDisplayService.getListsToDisplay()
      .subscribe(lists => this.lists = lists);
  }
}
