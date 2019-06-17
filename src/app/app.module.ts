import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './services/loading.interceptor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFieldComponent } from './components/input-field/input-field.component';

import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { EventComponent } from './pages/event/event.component';
import { TuesdayComponent } from './pages/tuesday/tuesday.component';
import { ThursdayComponent } from './pages/thursday/thursday.component';
import { AdminEventComponent } from './pages/admin-event/admin-event.component';
import { LegendaryComponent } from './pages/legendary/legendary.component';
import { AdminBigbrotherComponent } from './pages/admin-bigbrother/admin-bigbrother.component';
import { AdminBigbrotherTableAdjustmentsComponent } from './pages/admin-bigbrother/table-adjustments/table-adjustments.component';
import { AdminBigbrotherTableEventsComponent } from './pages/admin-bigbrother/table-events/table-events.component';
import { AdminBigbrotherTableHouseguestsComponent } from './pages/admin-bigbrother/table-houseguests/table-houseguests.component';
import { AdminBigbrotherTablePicksComponent } from './pages/admin-bigbrother/table-picks/table-picks.component';
import { AdminBigbrotherTablePlayersComponent } from './pages/admin-bigbrother/table-players/table-players.component';
import { AdminBigbrotherTableScoringComponent } from './pages/admin-bigbrother/table-scoring/table-scoring.component';
import { AdminBigbrotherTableSeasonsComponent } from './pages/admin-bigbrother/table-seasons/table-seasons.component';
import { BbSelectEventComponent } from './components/bb-select-event/bb-select-event.component';
import { BbSelectHouseguestComponent } from './components/bb-select-houseguest/bb-select-houseguest.component';
import { BbSelectPlayerComponent } from './components/bb-select-player/bb-select-player.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    UpcomingComponent,
    EventComponent,
    AdminEventComponent,
    TuesdayComponent,
    ThursdayComponent,
    LegendaryComponent,
    AdminBigbrotherComponent,
    AdminBigbrotherTableAdjustmentsComponent,
    AdminBigbrotherTableEventsComponent,
    AdminBigbrotherTableHouseguestsComponent,
    AdminBigbrotherTablePicksComponent,
    AdminBigbrotherTablePlayersComponent,
    AdminBigbrotherTableScoringComponent,
    AdminBigbrotherTableSeasonsComponent,
    BbSelectEventComponent,
    BbSelectHouseguestComponent,
    BbSelectPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxUiLoaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
