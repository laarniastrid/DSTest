import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeopleService } from '../services/people.service';
import { User } from '../models/user';

@Component({
	selector: 'app-person',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
	user: User;
	id: Number;
	hasError: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private service: PeopleService,
	) {
		route.paramMap.subscribe(route => {
			this.id = Number(route.get('id'));
		})
	}

	ngOnInit() {
		this.getUser(this.id);
	}

	getUser(id: Number) {
		this.service.getOne()
			.subscribe(response => {
				this.user = response.filter(user => user.id === this.id)[0];
			},
			error => {
				this.hasError = true;
			})
	}
}
