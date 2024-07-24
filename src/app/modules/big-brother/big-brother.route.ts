import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BigBrotherGuard } from './big-brother.guard';
import { HouseguestsComponent } from './houseguests/houseguests.component';

const routes: Routes = [
	{path: 'bb',component: HouseguestsComponent,canActivate:[BigBrotherGuard] }
	//{path: 'bb',component: BigBrotherComponent,canActivate:[DataGuard] }
	//,{path: 'bb/scores',component: ScoresComponent,canActivate:[DataGuard] }
	//,{path: 'bb/houseguests',component: HouseguestsComponent,canActivate:[DataGuard] }
	//,{path: 'bb/player/:pkey',component: PlayerComponent,canActivate:[DataGuard] }
	//,{path: 'bb/admin/events',component: EventsComponent,canActivate:[DataGuard,AdminGuard] }
	,{ path: 'bb/**',redirectTo: 'bb' }
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
	,exports: [RouterModule]
})

export class BigBrotherRoutingModule { }
