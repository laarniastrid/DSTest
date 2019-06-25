import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatTabsModule } from '@angular/material';

import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
	RouterModule,
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatDividerModule,
	FlexLayoutModule,
  ]
})
export class UserModule { }
