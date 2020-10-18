import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-user-contact',
	templateUrl: './user-contact.component.html',
	styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent {


	@Input()
	public childForm: FormGroup;

	@Input()
	public arrayIndex: number;

	@Input()
	public totalContacts: number;

	@Output()
	public deleteContactEvent: EventEmitter<number> = new EventEmitter<number>();

	get nameField (): FormControl {
		return this.childForm?.get( 'name' ) as FormControl;
	}

	get emailField (): FormControl {
		return this.childForm?.get( 'email' ) as FormControl;
	}


	constructor() { }


	static addUserContactItem ( name?: string ): FormGroup {
		return new FormGroup({
			name: new FormControl(
				name || '',
				{
					validators: [
						Validators.required
					]
				}
			),
			email: new FormControl(
				'',
				{
					validators: [
						Validators.required
					]
				}
			)
		});
	}

	public deleteContact ( index: number ): void {
		this.deleteContactEvent.next( index );
	}

}
