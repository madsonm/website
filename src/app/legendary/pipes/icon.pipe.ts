import { Pipe,PipeTransform } from '@angular/core';


@Pipe({ name: 'legendaryIcon' })
export class LegendaryIconPipe implements PipeTransform {
	transform(value: string): string {
		if (!value) { return value; }

		return `${value}`.replace(/\[([0-9a-z. ]+)\]/ig,(full,match) => {
			let icon = '';

			switch (`${match}`.toLowerCase()) {
				case 'attack': icon = 'Attack.png'; break;
				case 'recruit': icon = 'Recruit.png'; break;
				case 'cost': icon = 'cost.jpg'; break;
				case 'piercing energy': icon = 'piercing.png'; break;
				case 'victory points': icon = 'victory-points.jpg'; break;

				case 'covert': icon = 'Skill - Covert.png'; break;
				case 'instinct': icon = 'Skill - Instinct.png'; break;
				case 'ranged': icon = 'Skill - Ranged.png'; break;
				case 'strength': icon = 'Skill - Strength.png'; break;
				case 'tech': icon = 'Skill - Tech.png'; break;

				case 's.h.i.e.l.d.':
				case 'shield': icon = 'team-shield.png'; break;

				default:
					return full;
			}

			return `<img class="icon" src="/img/legendary/${icon}">`;
		});
	}
}
