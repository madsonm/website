import { Component,Inject } from '@angular/core';
import { FormBuilder,UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogConfig,MatDialogRef } from '@angular/material/dialog';
import { SessionStorage } from 'ngx-webstorage';
import { AdminService } from '../../admin.service';

@Component({
	selector: 'app-modal-event-add',
	templateUrl: './modal-event-add.component.html',
	styleUrls: ['./modal-event-add.component.scss']
})
export class ModalEventAddComponent {
	@SessionStorage() houseguests;
	@SessionStorage() scoring;

	static modalConfig = { autoFocus: true,width: '40em' } as MatDialogConfig;  // Config to be used externally

	form: UntypedFormGroup;
	get v() { return this.form.value } // Shorthand
	get c() { return this.form.controls } // Shorthand

	houseguestCount = 1;

	constructor(
		private formBuilder: FormBuilder
		,private dialogRef: MatDialogRef<ModalEventAddComponent>
		,private service: AdminService
		,@Inject(MAT_DIALOG_DATA) public data
	) {
		const date = new Date();
		date.setHours(21);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);

		this.form = this.formBuilder.group({
			ekey: [null]
			,date: [date.toISOString()]
			,hkey1: [null]
			,hkey2: [null]
			,hkey3: [null]
			,hkey4: [null]
			,hkey5: [null]
			,hkey6: [null]
		});
		this.form.get('ekey').valueChanges.subscribe(ekey => {
			switch (`${ekey ?? ''}`.replace(/^bb[^_]+_/,'')) {
				case 'havenot':
					this.houseguestCount = 4;
					break;
				case 'povplay':
					this.houseguestCount = 6;
					break;
				case 'nom':
					this.houseguestCount = 3;
					break;
				default:
					this.houseguestCount = 1;
			}
		});
	}

	getScoring() {
		const arr = Array.isArray(this.scoring) ? [...this.scoring] : [];
		return arr.filter(rec => !/survived/ig.test(rec.ekey));
	}

	getHouseguests(hkey: string) {
		const arr = Array.isArray(this.houseguests) ? [...this.houseguests] : [];
		return arr.filter(rec => !rec.evicted)
			.filter(rec => hkey === 'hkey1' || rec.hkey !== this.v.hkey1)
			.filter(rec => hkey === 'hkey2' || rec.hkey !== this.v.hkey2)
			.filter(rec => hkey === 'hkey3' || rec.hkey !== this.v.hkey3)
			.filter(rec => hkey === 'hkey4' || rec.hkey !== this.v.hkey4)
			.filter(rec => hkey === 'hkey5' || rec.hkey !== this.v.hkey5)
			.filter(rec => hkey === 'hkey6' || rec.hkey !== this.v.hkey6);
	}

	now(): void {
		this.form.get('date').setValue((new Date()).toISOString());
		this.save();
	}

	save(): void {
		this.service.eventAdd(this.v).subscribe(response => {
			if (response) this.dialogRef.close(true);
		});
	}
}
