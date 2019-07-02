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


  bbAdminFindAdjustments() { return this.http.post<any>('/svc/bb/admin/adjustment/get.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindEvents() { return this.http.post<any>('/svc/bb/admin/events/get.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindHouseguests() { return this.http.post<any>('/svc/bb/admin/houseguests/get.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindPicks() { return this.http.post<any>('/svc/bb/admin/picks/get.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindPlayers() { return this.http.post<any>('/svc/bb/admin/players/get.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindScoring() { return this.http.post<any>('/svc/bb/admin/points/get.cgi', {}).pipe(untilDestroyed(this)); }
  bbAdminFindSeasons() { return this.http.post<any>('/svc/bb/admin/seasons/get.cgi', {}).pipe(untilDestroyed(this)); }

  bbAdminSaveAdjustments(obj: any) { return this.http.post<any>('/svc/bb/admin/adjustment/add.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminSaveEvents(obj: any) { return this.http.post<any>('/svc/bb/admin/events/add.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminSaveHouseguests(obj: any) { return this.http.post<any>('/svc/bb/admin/houseguests/add.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminSavePicks(obj: any) { return this.http.post<any>('/svc/bb/admin/picks/add.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminSavePlayers(obj: any) { return this.http.post<any>('/svc/bb/admin/players/add.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminSaveScoring(obj: any) { return this.http.post<any>('/svc/bb/admin/points/add.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminSaveSeasons(obj: any) { return this.http.post<any>('/svc/bb/admin/seasons/add.cgi', obj).pipe(untilDestroyed(this)); }

  bbAdminSetSeasons(obj: any) { return this.http.post<any>('/svc/bb/admin/seasons/set.cgi', obj).pipe(untilDestroyed(this)); }

  bbAdminDeleteAdjustments(obj: any) { return this.http.post<any>('/svc/bb/admin/adjustment/del.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminDeleteEvents(obj: any) { return this.http.post<any>('/svc/bb/admin/events/del.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminDeleteHouseguests(obj: any) { return this.http.post<any>('/svc/bb/admin/houseguests/del.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminDeletePicks(obj: any) { return this.http.post<any>('/svc/bb/admin/picks/del.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminDeletePlayers(obj: any) { return this.http.post<any>('/svc/bb/admin/players/del.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminDeleteScoring(obj: any) { return this.http.post<any>('/svc/bb/admin/points/del.cgi', obj).pipe(untilDestroyed(this)); }
  bbAdminDeleteSeasons(obj: any) { return this.http.post<any>('/svc/bb/admin/seasons/del.cgi', obj).pipe(untilDestroyed(this)); }
}
