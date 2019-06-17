import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() label: string;
  @Input() type = 'text';
  @Input() control: FormControl;
  @Input() hint: string;
  @Output() change = new EventEmitter<any>();

  constructor() { }

  doChange() {
    this.change.emit(this.control.value);
  }
}
