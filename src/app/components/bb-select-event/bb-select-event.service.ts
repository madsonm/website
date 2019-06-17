import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Injectable({
  providedIn: 'root'
})
export class BbSelectEventService implements OnDestroy {

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void { }

  find() { return this.http.post<any>('/svc/bb/adminFindScoring.cgi', {}).pipe(untilDestroyed(this)); }
}
