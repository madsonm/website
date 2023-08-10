import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/core/shared.module';
import { BigBrotherComponent } from './big-brother.component';
import { BigBrotherRoutingModule } from './big-brother.route';



@NgModule({
	declarations: [
		BigBrotherComponent
	]
	,imports: [
		CommonModule
		,SharedModule
		,BigBrotherRoutingModule
	]
})
export class BigBrotherModule { }
