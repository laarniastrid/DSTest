import { Component, OnInit, ViewChild } from '@angular/core';
import { PeopleService } from '../services/people.service';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
	dataSource;
	filteredDataSource;
	peopleColumns: string[] = ['name', 'username', 'email'];

	constructor(
		private people: PeopleService,
	) { }

	ngOnInit() {
		this.getList()
	}

	getList() {
		this.people.getList()
			.subscribe(response => {
				console.log('response , ', response);
				this.dataSource = response;
				this.filteredDataSource = response;
			})
	}

	applyFilter(filterValue: string) {
		this.filteredDataSource = this.dataSource.filter(person => person.name.toLowerCase().indexOf(filterValue) >= 0);
	}

	test(person) {
		console.log(person);
	}

}
