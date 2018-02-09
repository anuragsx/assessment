import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {

  authors: any

  constructor(private authorService: AuthorsService) { }

  ngOnInit() {
  	this.authorsListCall();
  }

   authorsListCall() {
    this.authorService.getAuthors().then(response => {
      //console.log("Got response:", response.data);
      
      this.authors = response.data;
    }).catch(error => {
      console.log("Got error:", error);
    }).then(response => {
      console.log("Another response:", response);
    }).catch(error => {
      console.log("Got another error:", error);
    });
  }



}
