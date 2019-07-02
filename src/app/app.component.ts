import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';
import { SessionStorage, SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @SessionStorage() title: string;
  loading = false;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private session: SessionStorageService
  ) {
    this.initSessionActions();
    this.initRouterActions();
  }

  private initSessionActions() {
    this.session.observe('title').subscribe(change => {
      console.log(change);
      this.titleService.setTitle(`${change.newValue} - Madson`);
    });
  }

  private initRouterActions() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter(route => route.outlet === 'primary'),
      )
      .subscribe(event => {
        this.closeSidenav();
      });
  }

  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
