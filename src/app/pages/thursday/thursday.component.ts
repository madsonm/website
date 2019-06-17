import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-thursday',
  templateUrl: './thursday.component.html',
  styleUrls: ['./thursday.component.scss']
})
export class ThursdayComponent implements OnInit {
  data = null;

  constructor(private service: MainService) {}

  ngOnInit() {
    this.service.get('THURSDAY').subscribe(response => {
      this.data = response.data;
    });
  }
}
