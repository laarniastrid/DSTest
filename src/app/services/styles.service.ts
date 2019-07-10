import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StylesService {
	public selectedStyle: string = 'material';

	constructor() { }

	// // Would this be better done as methods instead of direct value changing?
	// setStyle(style: string): void {
	// 	this.selectedStyle = style;
	// }

	// getStyle(): string {
	// 	return this.selectedStyle;
	// }
}
