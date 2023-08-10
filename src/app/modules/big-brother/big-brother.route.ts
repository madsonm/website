import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DataGuard } from 'src/app/core/guards/data.guard';
import { BigBrotherComponent } from './big-brother.component';

const routes: Routes = [
	{path: 'bb',component: BigBrotherComponent,canActivate:[DataGuard] }
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
	,exports: [RouterModule]
})

export class BigBrotherRoutingModule { }
