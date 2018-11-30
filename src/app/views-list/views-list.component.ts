import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ListToDisplay } from '../listToDisplay';

@Component({
  selector: 'app-views-list',
  templateUrl: './views-list.component.html',
  styleUrls: ['./views-list.component.scss']
})
export class ViewsListComponent implements OnInit {
  @Input() listToDisplay: ListToDisplay;
  @Output() mockOutput: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onViewClick(value: string) {
    this.mockOutput.emit(value);
  }
}
