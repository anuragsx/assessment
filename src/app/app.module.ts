import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: AuthorsComponent}
    ])
  ],
  providers: [],
  schemas: [
  	CUSTOM_ELEMENTS_SCHEMA,
  	NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
