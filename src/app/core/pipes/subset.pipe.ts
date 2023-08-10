import { Pipe,PipeTransform } from '@angular/core';

@Pipe({ name: 'subset' })
export class SubsetPipe implements PipeTransform {
	transform(array: any[],count: number): any[] {
		if (!Array.isArray(array)) { return array; }

		const split = [];
		let set = [] as any;

		array.forEach((rec,i) => {
			set.push(rec);

			if (i % count === count - 1) {
				split.push(set);
				set = [];
			}
		});
		if (set.length) {
			split.push(set);
		}

		return split;
	}
}
