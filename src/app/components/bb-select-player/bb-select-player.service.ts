import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Injectable({
  providedIn: 'root'
})
export class BbSelectPlayerService implements OnDestroy {

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void { }

  find() { return this.http.post<any>('/svc/bb/adminFindPlayers.cgi', {}).pipe(untilDestroyed(this)); }
}
