import { Component } from '@angular/core';
import { LISTTODISPLAY1, LISTTODISPLAY2 } from './mock-lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Page';
  liste1 = LISTTODISPLAY1;
  liste2 = LISTTODISPLAY2;
}
