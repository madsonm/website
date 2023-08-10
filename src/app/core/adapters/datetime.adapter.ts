import { NgxMatNativeDateAdapter,NgxMatDateFormats } from '@angular-material-components/datetime-picker';
import { Injectable } from '@angular/core';

export const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
	parse: {
		dateInput: { month: 'short',year: 'numeric',day: 'numeric' }
	},
	display: {
		dateInput: 'input',
		monthYearLabel: { year: 'numeric',month: 'short' },
		dateA11yLabel: { year: 'numeric',month: 'long',day: 'numeric' },
		monthYearA11yLabel: { year: 'numeric',month: 'long' },
	}
};

@Injectable()
export class CustomDateAdapter extends NgxMatNativeDateAdapter {
	override format(date: Date,displayFormat: any): string {
		if (displayFormat === 'input') {
			const year = date.getFullYear();
			const month = ('0' + (date.getMonth() + 1)).slice(-2);
			const day = ('0' + (date.getDate())).slice(-2);
			const hours = ('0' + date.getHours()).slice(-2);
			const minutes = ('0' + date.getMinutes()).slice(-2);
			return `${year}-${month}-${day} ${hours}:${minutes}`;
		} else {
			// navigator.language is used here for IE11 support.
			return date.toLocaleString((navigator.language ? navigator.language : 'en-US'),displayFormat);
		}
	}

	override parse(value: any): Date | null {
		value = value.replace('-',' '); // IE11 support.
		return !!Date.parse(value) ? new Date(Date.parse(value)) : null;
	}
}
