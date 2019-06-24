import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

const url = "https://jsonplaceholder.typicode.com/users";

@Injectable({
	providedIn: 'root'
})
export class PeopleService {

	constructor(
		private http: HttpClient,
	) { }

	getList(): Observable<User[]> {
		return this.http.get<User[]>(url);
	}

	// Getlist (1 user), this should be update to take a param for a single user
	getOne(): Observable<User[]> {
		return this.http.get<User[]>(url);
	}

}
