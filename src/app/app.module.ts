import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ViewsListComponent } from './views-list/views-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewsListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
