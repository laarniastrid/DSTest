import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
	RouterModule,
	MatIconModule,
	MatButtonModule,
  ]
})
export class UserModule { }
