import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-adjustments',
  templateUrl: './table-adjustments.component.html',
  styleUrls: ['./table-adjustments.component.scss']
})
export class AdminBigbrotherTableAdjustmentsComponent implements OnInit {
  columns = ['player', 'reason', 'score', 'actions']; // Adjustments
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
    this.service.bbAdminFindAdjustments().subscribe(response => {
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
      reason: [obj.reason, Validators.required],
      score: [obj.score, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    console.log(form.value);
  }
}
