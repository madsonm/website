import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { EventComponent } from './pages/event/event.component';
import { TuesdayComponent } from './pages/tuesday/tuesday.component';
import { ThursdayComponent } from './pages/thursday/thursday.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { LegendaryComponent } from './pages/legendary/legendary.component';
import { AdminBigbrotherComponent } from './pages/admin-bigbrother/admin-bigbrother.component';

const routes: Routes = [
  { path: '', component: UpcomingComponent, data: { title: 'Upcoming Events' } },
  { path: 'upcoming', component: UpcomingComponent, data: { title: 'Upcoming Events' } },
  { path: 'event', component: EventComponent, data: { title: 'Events' } },
  { path: 'event/:event', component: EventComponent, data: { title: 'Events' } },
  { path: 'admin/event', component: AdminEventComponent, data: { title: 'Event Administration' } },
  { path: 'admin/event/:event', component: AdminEventComponent, data: { title: 'Events Administration' } },
  { path: 'tuesday', component: TuesdayComponent, data: { title: 'Tuesday' } },
  { path: 'thursday', component: ThursdayComponent, data: { title: 'Thursday' } },
  { path: 'legendary', component: LegendaryComponent, data: { title: 'Legendary' } },
  { path: 'admin/bigbrother', component: AdminBigbrotherComponent, data: { title: 'Big Brother Administration' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
