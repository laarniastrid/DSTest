import { Component, OnInit, ViewChild } from '@angular/core';

import { PeopleService } from '../services/people.service';
import { User } from '../models/user';

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
	dataSource: User[];
	filteredDataSource: User[];
	peopleColumns: string[] = ['name', 'username', 'email'];
	hasError: boolean = false;

	constructor(
		private people: PeopleService,
	) { }

	ngOnInit() {
		this.getList()
	}

	getList() {
		this.people.getList()
			.subscribe(response => {
				this.dataSource = response;
				this.filteredDataSource = response;
			},
			error => {
				this.hasError = true;
			})
	}

	applyFilter(filterValue: string) {
		this.filteredDataSource = this.dataSource.filter(person => person.name.toLowerCase().indexOf(filterValue) >= 0);
	}

}
