import { Pipe,PipeTransform } from '@angular/core';


@Pipe({ name: 'legendaryStyle' })
export class LegendaryStylePipe implements PipeTransform {
	transform(value: string): string {
		if (!value) { return value; }

		return `${value}`.replace(/([0-9N+-]|\*)+\s*\[([0-9a-z. ]+)\]/ig,(full,match1,match2) => {
			return `<strong>${match1}[${match2}]</strong>`;
		}).replace(/(Legendary®:?\s*(Encounters|Annihilation|Ant-Man|Black Panther|Captain America 75th Anniversary|Champions|Civil War|Dark City|Deadpool|Dimensions|Doctor Strange and The Shadows of Nightmare|Fantastic 4|Fear Itself|Guardians of the Galaxy|Heroes of Asgard|Into the Cosmos|Marvel Studios Guardians of the Galaxy|Marvel Studios Phase 1|Messiah Complex|Nior|Paint the Town Red|Realm of Kings|Revelations|S.H.I.E.L.D.|Secret Wars Vol. 1|Secret Wars Vol. 2|Spider-Man Homecoming|The New Mutants|Venom|World War Hulk|X-Men))/gi,(full,match) => {
			return `<em>${match}</em>`;
		});
	}
}
