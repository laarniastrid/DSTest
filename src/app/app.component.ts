import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StylesService } from './services/styles.service';

export interface AppStyles {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'DSTest';

	appStylesForm = new FormControl('', [Validators.required]);

	appStyles: AppStyles[] = [
		{ value: 'material', viewValue: 'Material' },
		{ value: 'sass', viewValue: 'Sass' },
	];

	constructor(
		private styles: StylesService,
	) {}

	get selectedStyle() {
		return this.styles.selectedStyle;
	}

	changed(e) {
		this.styles.selectedStyle = e.srcElement.value;
	}

	isMaterial() {
		return this.selectedStyle === 'material';
	}

	isSass() {
		return this.selectedStyle === 'sass';
	}

}
