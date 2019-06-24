import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
	declarations: [
		PeopleComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		MatTableModule,
		MatSortModule,
		MatFormFieldModule,
		MatInputModule,
	]
})
export class PeopleModule { }
