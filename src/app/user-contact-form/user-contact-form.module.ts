import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContactFormComponent } from './user-contact-form.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule( {
	declarations: [
		UserContactFormComponent,
		UserContactComponent
	],
	exports: [
		UserContactFormComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class UserContactFormModule { }
