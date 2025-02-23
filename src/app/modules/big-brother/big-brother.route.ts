import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { EventsComponent } from './admin/events/events.component';
import { BigBrotherComponent } from './big-brother.component';
import { BigBrotherGuard } from './big-brother.guard';
import { HouseguestsComponent } from './houseguests/houseguests.component';
import { PlayerComponent } from './player/player.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
	//{path: 'bb',component: HouseguestsComponent,canActivate:[BigBrotherGuard] }
	{path: 'bb',component: BigBrotherComponent,canActivate:[BigBrotherGuard] }
	,{path: 'bb/scores',component: ScoresComponent,canActivate:[BigBrotherGuard] }
	,{path: 'bb/houseguests',component: HouseguestsComponent,canActivate:[BigBrotherGuard] }
	,{path: 'bb/something/player/:pkey',component: PlayerComponent,canActivate:[BigBrotherGuard] }
	,{path: 'bb/something/something',component: EventsComponent,canActivate:[BigBrotherGuard] }
	,{ path: 'bb/**',redirectTo: 'bb' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
	,exports: [RouterModule]
})

export class BigBrotherRoutingModule { }
