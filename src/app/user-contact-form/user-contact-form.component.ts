import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { UserContactComponent } from './user-contact/user-contact.component';


@Component({
	selector: 'app-user-contact-form',
	templateUrl: './user-contact-form.component.html',
	styleUrls: ['./user-contact-form.component.scss']
})
export class UserContactFormComponent implements OnInit {


	public userContactForm: FormGroup;

	get contactArray (): FormArray {
		return this.userContactForm?.get( 'contacts' ) as FormArray;
	}


	constructor () { }


	ngOnInit (): void {
		this.generateUserContactForm();
	}


	public generateUserContactForm (): void {
		this.userContactForm = new FormGroup({
			contacts: new FormArray([
				UserContactComponent.addUserContactItem( )
			])
		});
	}

	public addUserContactItem (): void {
		this.contactArray?.push( UserContactComponent.addUserContactItem() );
	}

	public deleteContact ( index: number ): void {
		this.contactArray?.removeAt( index );
	}

	public submitUserContactsForm (): void {
		console.log( this.userContactForm.value );
	}
}
