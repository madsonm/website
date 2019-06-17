import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.scss']
})
export class TuesdayComponent implements OnInit {
  data = null;

  constructor(private service: MainService) {}

  ngOnInit() {
    this.service.get('TUESDAY').subscribe(response => {
      this.data = (response.data || []).sort((a, b) =>
        a.date > b.date ? 1 : -1
      );
    });
  }
}
