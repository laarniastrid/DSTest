import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
	RouterModule,
	MatIconModule,
  ]
})
export class PersonModule { }
