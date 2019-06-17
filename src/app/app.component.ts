import { Component, ViewChild } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Page Title';
  loading = false;

  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.initRouterActions();
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
        mergeMap(route => route.data)
      )
      .subscribe(event => {
        this.title = event['title'];
        this.titleService.setTitle(`${this.title} - Madson`);
        this.closeSidenav();
      });
  }

  closeSidenav() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }
}
