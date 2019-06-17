import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-events',
  templateUrl: './table-events.component.html',
  styleUrls: ['./table-events.component.scss']
})
export class AdminBigbrotherTableEventsComponent implements OnInit {
  columns = ['houseguest', 'event', 'date', 'actions']; // Events
  table = new MatTableDataSource();

  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  constructor(
    private service: MainService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.bbAdminFindEvents().subscribe(response => {
      this.table.data = response.data;
    });
  }

  add(obj: any): void {
    this.edit(obj || { ...obj, new: true });
  }

  edit(obj: any): void {
    const config = new MatDialogConfig();
    config.data = this.formBuilder.group({
      id: [obj.id],
      ekey: [obj.ekey, Validators.required],
      hkey: [obj.hkey, Validators.required],
      date: [obj.date, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    console.log(form.value);
  }
}
