import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './services/loading.interceptor';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { WebStorageModule } from 'ngx-store';
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

import { AdminBigbrotherAdjustmentsComponent } from './pages/admin-bigbrother/adjustments/adjustments.component';
import { AdminBigbrotherEventsComponent } from './pages/admin-bigbrother/events/events.component';
import { AdminBigbrotherHouseguestsComponent } from './pages/admin-bigbrother/houseguests/houseguests.component';
import { AdminBigbrotherPicksComponent } from './pages/admin-bigbrother/picks/picks.component';
import { AdminBigbrotherPlayersComponent } from './pages/admin-bigbrother/players/players.component';
import { AdminBigbrotherScoringComponent } from './pages/admin-bigbrother/scoring/scoring.component';
import { AdminBigbrotherSeasonsComponent } from './pages/admin-bigbrother/seasons/seasons.component';

import { BbSelectEventComponent } from './components/bb-select-event/bb-select-event.component';
import { BbSelectHouseguestComponent } from './components/bb-select-houseguest/bb-select-houseguest.component';
import { BbSelectPlayerComponent } from './components/bb-select-player/bb-select-player.component';
import { AdminComponent } from './pages/admin/admin.component';

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
    AdminComponent,
    AdminBigbrotherComponent,
    AdminBigbrotherAdjustmentsComponent,
    AdminBigbrotherEventsComponent,
    AdminBigbrotherHouseguestsComponent,
    AdminBigbrotherPicksComponent,
    AdminBigbrotherPlayersComponent,
    AdminBigbrotherScoringComponent,
    AdminBigbrotherSeasonsComponent,
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
    WebStorageModule,
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
