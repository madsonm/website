import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BbSelectEventService } from './bb-select-event.service';

@Component({
  selector: 'bb-select-event',
  templateUrl: './bb-select-event.component.html',
  styleUrls: ['./bb-select-event.component.scss']
})
export class BbSelectEventComponent implements OnInit {
  @Input() control: FormControl;
  @Input() hint: string;
  @Output() change = new EventEmitter<any>();

  options = [];

  constructor(private service: BbSelectEventService) { }

  ngOnInit() {
    this.service.find().subscribe(response => {
      this.options = response.data || [];
    });
  }

  compare(a: any, b: any): boolean {
    return a.ekey === b.ekey;
  }

  doChange() {
    this.change.emit(this.control.value);
  }
}
