import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';
import { ModalConfirmComponent } from '../components/modal-confirm/modal-confirm.component';

export interface ModalConfig {
	modal: ComponentType<any>;  // Modal Component
	modalInput?: any;  // Input to be sent to Modal
	callbackFn?: Function;  // Action config after modal closed
}
export interface ModalConfirm {
	title: string;  // Title of the confirm modal, concise question about what is being confirmed.
	subtitle?: string;  // Optional subtitle of the confirm modal. 
	body?: string | string[];  // Body of the confirm modal, should be a more detailed question specifically asking about what is to be confirmed.
	button?: string;  // Text for the "confirm" button (defaults to 'Confirm')
	cancel?: boolean;  // Whether to show a cancel button
	callbackFn?: Function;  // Action config after modal closed
}

// Modals can have their own self-defined configs.  Ex:  
// static modalConfig = { autofocus: false,disableClose: true,width: '40em' };  // Config to be used externally

@Injectable({
	providedIn: 'root'
})
export class ModalService {
	constructor(private dialog: MatDialog) { }


	open(input: ModalConfig): void {
		const config = {
			...{ autoFocus: false,width: undefined }  // Default settings
			,...(input.modal['modalConfig'] || {})  // Modal Component defined configs (override default) [ex: MyModalComponent.config (static value on base class)]
			,data: input.modalInput || null  // Input data
		} as MatDialogConfig;

		setTimeout(() => {  // Timeout stops closing mat-menu from stealing focus *
			this.dialog
				.open(input.modal,config)
				.afterClosed()
				.pipe(
					filter(response => !!response)
					,filter(response => !!input.callbackFn)
				)
				.subscribe(changed => {
					input.callbackFn.call(this,changed);
				});
		},100);
	}


	confirm(input: ModalConfirm): void {
		const config = {
			...ModalConfirmComponent.modalConfig  // Default settings
			,data: input  // Input data
		} as MatDialogConfig;

		setTimeout(() => {  // Timeout stops closing mat-menu from stealing focus *
			this.dialog
				.open(ModalConfirmComponent,config)
				.afterClosed()
				.pipe(
					filter(response => !!response)
					,filter(response => !!input.callbackFn)
				)
				.subscribe(changed => {
					input.callbackFn.call(this,changed);
				});
		},100);
	}


	closeAll() {
		this.dialog.closeAll();
	}


	// * : https://stackoverflow.com/questions/59374089/focus-is-being-removed-from-the-element-when-we-select-any-item-from-the-angular
}
