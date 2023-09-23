import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-modal-confirm',
	templateUrl: './modal-confirm.component.html',
	styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
	title: string;
	subtitle: string;
	button: string;
	body: string[];
	cancel: boolean;

	static modalConfig = { autofocus: false,disableClose: true,width: '40em' };  // Config to be used externally

	constructor(
		private dialogRef: MatDialogRef<ModalConfirmComponent>,
		@Inject(MAT_DIALOG_DATA) data
	) {
		this.title = data.title;
		this.subtitle = data.subtitle;
		this.button = data.button || 'Confirm';
		this.body = [];
		this.cancel = data.cancel === undefined ? true : !!data.cancel;

		// Body is an array of paragraphs
		if (Array.isArray(data.body)) {
			this.body = data.body;
		} else if (typeof data.body === 'string') {
			this.body = [data.body];
		}
	}

	confirm() {
		this.dialogRef.close(true);
	}
}
