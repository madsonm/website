import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {
  data = null;

  constructor(private router: Router, private service: MainService) { }

  ngOnInit() {
    this.service.get('UPCOMING').subscribe(response => {
      this.data = (response.data || []).sort((a, b) =>
        a.date > b.date ? 1 : -1
      );
    });
  }

  goto(event) {
    if (event.link) {
      this.router.navigateByUrl(event.link);
    }
  }
}
