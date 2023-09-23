import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { DataGuard } from 'src/app/core/guards/data.guard';
import { EventsComponent } from './admin/events/events.component';
import { BigBrotherComponent } from './big-brother.component';
import { HouseguestsComponent } from './houseguests/houseguests.component';
import { PlayerComponent } from './player/player.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
	{path: 'bb',component: BigBrotherComponent,canActivate:[DataGuard] }
	,{path: 'bb/scores',component: ScoresComponent,canActivate:[DataGuard] }
	,{path: 'bb/houseguests',component: HouseguestsComponent,canActivate:[DataGuard] }
	,{path: 'bb/player/:pkey',component: PlayerComponent,canActivate:[DataGuard] }
	,{path: 'bb/admin/events',component: EventsComponent,canActivate:[DataGuard,AdminGuard] }
	,{ path: 'bb/**',redirectTo: 'bb' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
	,exports: [RouterModule]
})

export class BigBrotherRoutingModule { }
