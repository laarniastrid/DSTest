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
			})
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
}
