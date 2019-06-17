import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-picks',
  templateUrl: './table-picks.component.html',
  styleUrls: ['./table-picks.component.scss']
})
export class AdminBigbrotherTablePicksComponent implements OnInit {
  columns = ['player', 'houseguest', 'start', 'end', 'actions']; // Picks
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
    this.service.bbAdminFindPicks().subscribe(response => {
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
      pkey: [obj.pkey, Validators.required],
      hkey: [obj.hkey, Validators.required],
      start: [obj.start, Validators.required],
      end: [obj.end, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    console.log(form.value);
  }
}
