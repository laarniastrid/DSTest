import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
	MatToolbarModule, 
	MatSelectModule, 
	MatFormFieldModule, 
	MatInputModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { PeopleModule } from './people/people.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	UserModule,
    PeopleModule,
	HttpClientModule,
	BrowserAnimationsModule,
	MatToolbarModule,
	ReactiveFormsModule,
	FlexLayoutModule,
	MatSelectModule,
	MatFormFieldModule,
	MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
