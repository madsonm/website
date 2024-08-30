import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/core/shared.module';
import { EventsComponent } from './admin/events/events.component';
import { ModalEventAddComponent } from './admin/events/modal-event-add/modal-event-add.component';
import { BigBrotherComponent } from './big-brother.component';
import { BigBrotherGuard } from './big-brother.guard';
import { BigBrotherRoutingModule } from './big-brother.route';
import { HistoryComponent } from './history/history.component';
import { HouseguestComponent } from './houseguest/houseguest.component';
import { HouseguestsComponent } from './houseguests/houseguests.component';
import { LogoComponent } from './logo/logo.component';
import { PlayerComponent } from './player/player.component';
import { ScoresComponent } from './scores/scores.component';
import { ScoringComponent } from './scoring/scoring.component';



@NgModule({
	declarations: [
		BigBrotherComponent
		,EventsComponent
		,ScoresComponent
		,HouseguestComponent
		,HouseguestsComponent
		,ModalEventAddComponent
		,PlayerComponent
		,HistoryComponent
		,LogoComponent
		,ScoringComponent
	]
	,imports: [
		CommonModule
		,SharedModule
		,MaterialModule
		,BigBrotherRoutingModule
	]
	,exports: [
		EventsComponent
		,ScoresComponent
		,HouseguestComponent
		,HouseguestsComponent
		,ModalEventAddComponent
		,PlayerComponent
		,HistoryComponent
		,LogoComponent
	]
	,providers: [
		BigBrotherGuard
	]
})
export class BigBrotherModule { }
