import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserContactFormComponent } from './user-contact-form.component';
import { UserContactComponent } from './user-contact/user-contact.component';



@NgModule( {
  declarations: [
    UserContactFormComponent,
    UserContactComponent
  ],
  exports: [
    UserContactFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserContactFormModule { }
