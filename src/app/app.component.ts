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
  list1: ListToDisplay;
  list2: ListToDisplay;

  constructor(private listToDisplayService: ListToDisplayService) { }

  ngOnInit() {
    // this.getListToDisplay1();
    // this.getListToDisplay2();
    this.getListToDisplay(1);
    this.getListToDisplay(2);
  }

  // getListToDisplay1(): void {
  //   this.listToDisplayService.getListToDisplay1()
  //     .subscribe(list1 => this.list1 = list1);
  // }
  // getListToDisplay2(): void {
  //   this.listToDisplayService.getListToDisplay2()
  //     .subscribe(list2 => this.list2 = list2);
  // }
  getListToDisplay(idList: number): void {
    this.listToDisplayService.getListToDisplay(idlist)
      .subscribe(list${ idList } => this.list${ idList } = list${ idList });
  }
}
