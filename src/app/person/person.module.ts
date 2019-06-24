import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PersonComponent],
  imports: [
    CommonModule,
	RouterModule,
  ]
})
export class PersonModule { }
