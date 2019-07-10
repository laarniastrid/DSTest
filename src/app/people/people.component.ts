import {
	Component,
	OnInit,
	HostListener,
} from '@angular/core';

import { PeopleService } from '../services/people.service';
import { User } from '../models/user';
import { StylesService } from '../services/styles.service';

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
		private styles: StylesService,
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

	get selectedStyle() {
		return this.styles.selectedStyle;
	}

	applyFilter(filterValue: string) {
		let value = filterValue.toLowerCase();

		this.filteredDataSource = this.dataSource.filter(person => person.name.toLowerCase().indexOf(value) >= 0);
	}

	isSmallScreen(): boolean {
		let smSize = 720;

		return this.innerWidth <= smSize;
	}

	isMaterial() {
		return this.selectedStyle === 'material';
	}

	isSass() {
		return this.selectedStyle === 'sass';
	}

}
