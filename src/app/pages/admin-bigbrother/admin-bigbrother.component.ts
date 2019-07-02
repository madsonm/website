import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-admin-bigbrother',
  templateUrl: './admin-bigbrother.component.html',
  styleUrls: ['./admin-bigbrother.component.scss']
})
export class AdminBigbrotherComponent implements OnInit {

  constructor(private session: SessionStorageService) {
    this.session.set('title', 'BB Admin');
  }

  ngOnInit() {
  }
}
