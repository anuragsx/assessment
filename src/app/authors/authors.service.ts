import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthorsService {

  constructor(private http: Http) { }

	getAuthors() {     
		let apiUrl = './assets/data/authors.json';
		return this.http.get(apiUrl).map(	
			response => 	{
				return response.json() || {success: false, message: "No response from server"};
			}).catch((error: Response | any) => {
				return Observable.throw(error.json());
			}).toPromise();		 			       
	}

}
