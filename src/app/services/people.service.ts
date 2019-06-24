import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class PeopleService {

	constructor(
		private http: HttpClient,
	) { }

	getList() {
		const url = "https://jsonplaceholder.typicode.com/users";

		return this.http.get(url);
	}

}
