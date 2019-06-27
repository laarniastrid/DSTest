import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

import { PeopleService } from '../services/people.service';
import { User } from '../models/user';

@Component({
	selector: 'app-people',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
	public innerWidth: any;

	dataSource: User[];
	filteredDataSource: User[];
	peopleColumns: string[] = ['name', 'username', 'email'];
	hasError: boolean = false;

	@HostListener('window:resize', ['$event'])
	onresize(event) {
		this.innerWidth = window.innerWidth;
	}
	
	constructor(
		private people: PeopleService,
	) { }

	ngOnInit() {
		this.innerWidth = window.innerWidth;

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

	isSmallScreen(): boolean {
		let smSize = 720;

		return this.innerWidth <= smSize;
	}

}
