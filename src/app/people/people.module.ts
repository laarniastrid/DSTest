import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule, MatDividerModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
		MatCardModule,
		MatDividerModule,
		FlexLayoutModule,
	]
})
export class PeopleModule { }
