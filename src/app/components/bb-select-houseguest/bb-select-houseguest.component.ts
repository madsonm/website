import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BbSelectHouseguestService } from './bb-select-houseguest.service';

@Component({
  selector: 'bb-select-houseguest',
  templateUrl: './bb-select-houseguest.component.html',
  styleUrls: ['./bb-select-houseguest.component.scss']
})
export class BbSelectHouseguestComponent implements OnInit {
  @Input() control: FormControl;
  @Input() hint: string;
  @Output() change = new EventEmitter<any>();

  options = [];

  constructor(private service: BbSelectHouseguestService) { }

  ngOnInit() {
    this.service.find().subscribe(response => {
      this.options = response.data || [];
    });
  }

  compare(a: any, b: any): boolean {
    return a.hkey === b.hkey;
  }

  doChange() {
    this.change.emit(this.control.value);
  }
}
