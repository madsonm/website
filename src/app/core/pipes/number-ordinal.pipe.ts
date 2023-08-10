import { Pipe,PipeTransform } from '@angular/core';

@Pipe({ name: 'numberOrdinal' })
export class NumberOrdinalPipe implements PipeTransform {
	transform(value: any,ordinalOnly?: boolean): string {
		if (!value) { return value; }
		if (typeof value !== 'number') { return value; }

		const num = `${value || ''}`.trim();
		let ordinal = 'th';

		if (/(^|[^1]|[02-9])1$/.test(num)) { ordinal = 'st'; }
		if (/(^|[^1]|[02-9])2$/.test(num)) { ordinal = 'nd'; }
		if (/(^|[^1]|[02-9])3$/.test(num)) { ordinal = 'rd'; }

		return `${!ordinalOnly ? num : ''}${ordinal}`;
	}
}
