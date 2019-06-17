import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Injectable({
  providedIn: 'root'
})
export class MainService implements OnDestroy {
  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    // Necessary for proper unsubscribe handling via untilDetroyed method
  }

  get(type: string) {
    const params = { get: `${type}`.toUpperCase() };

    return this.http
      .post<any>('/svc/eventFind.cgi', params)
      .pipe(untilDestroyed(this));
  }

  getEvent(event: string) {
    const input = { name: event };

    return this.http
      .post<any>('/svc/eventGet.cgi', input)
      .pipe(untilDestroyed(this));
  }

  addAttendee(input) {
    return this.http
      .post<any>('/svc/eventSignup.cgi', input)
      .pipe(untilDestroyed(this));
  }


  bbAdminFindAdjustments() { return this.http.post<any>('/svc/bb/adminFindAdjustments.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindEvents() { return this.http.post<any>('/svc/bb/adminFindEvents.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindHouseguests() { return this.http.post<any>('/svc/bb/adminFindHouseguests.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindPicks() { return this.http.post<any>('/svc/bb/adminFindPicks.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindPlayers() { return this.http.post<any>('/svc/bb/adminFindPlayers.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindScoring() { return this.http.post<any>('/svc/bb/adminFindScoring.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindSeasons() { return this.http.post<any>('/svc/bb/adminFindSeasons.cgi', {}).pipe(untilDestroyed(this)); }
}
