import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';

import { SharedModule } from '../../core/shared.module';
import { LegendaryRoutingModule } from './legendary.route';

import { LegendaryIconsPipe } from './main/legendary-icons.pipe';
import { LegendaryStylesPipe } from './main/legendary-styles.pipe';
import { MainComponent } from './main/main.component';

@NgModule({
	declarations: [
		MainComponent
		,LegendaryStylesPipe
		,LegendaryIconsPipe
	]
	,imports: [
		CommonModule
		,SharedModule
		,LegendaryRoutingModule
	]
	,schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LegendaryModule { }
