import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-seasons',
  templateUrl: './table-seasons.component.html',
  styleUrls: ['./table-seasons.component.scss']
})
export class AdminBigbrotherTableSeasonsComponent implements OnInit {
  columns = ['fullname', 'active', 'actions']; // Seasons
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
    this.service.bbAdminFindSeasons().subscribe(response => {
      this.table.data = response.data;
    });
  }

  add(obj: any): void {
    this.edit(obj || { ...obj, new: true });
  }

  edit(obj: any): void {
    const config = new MatDialogConfig();
    config.data = this.formBuilder.group({
      name: [obj.name],
      season: [obj.season, Validators.required],
      fullname: [obj.fullname, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    console.log(form.value);
  }
}
