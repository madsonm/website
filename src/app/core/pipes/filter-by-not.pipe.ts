import { Pipe,PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByNot',pure: false })
export class FilterByNotPipe implements PipeTransform {
	transform(array: any[],keys: string[],value: any): any[] {
		if (!Array.isArray(array)) { return array; }
		if (!Array.isArray(keys)) { return array; }
		if (!value) { return array; }

		return [...(array)]
			.filter(rec => typeof rec === 'object' && !Array.isArray(rec) && rec !== null)  // Non-objects won't have object keys, so they fail always
			.filter(rec => keys.filter(key => rec[key] == value).length === 0);  // If any of our checked keys match (length > 0) then don't show it
	}
}
