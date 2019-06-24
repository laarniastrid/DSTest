import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
	{ path: '', redirectTo: 'people', pathMatch: 'full' },
	{ path: 'people', component: PeopleComponent },
	{ path: 'person/:id', component: UserComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
