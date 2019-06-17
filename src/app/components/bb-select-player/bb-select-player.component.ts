import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BbSelectPlayerService } from './bb-select-player.service';

@Component({
  selector: 'bb-select-player',
  templateUrl: './bb-select-player.component.html',
  styleUrls: ['./bb-select-player.component.scss']
})
export class BbSelectPlayerComponent implements OnInit {
  @Input() control: FormControl;
  @Input() hint: string;
  @Output() change = new EventEmitter<any>();

  options = [];

  constructor(private service: BbSelectPlayerService) { }

  ngOnInit() {
    this.service.find().subscribe(response => {
      this.options = response.data || [];
    });
  }

  compare(a: any, b: any): boolean {
    return a.pkey === b.pkey;
  }

  doChange() {
    this.change.emit(this.control.value);
  }
}
