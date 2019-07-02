import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-adjustments',
  templateUrl: './adjustments.component.html',
  styleUrls: ['./adjustments.component.scss']
})
export class AdminBigbrotherAdjustmentsComponent implements OnInit {
  columns = ['player', 'reason', 'score', 'actions']; // Adjustments
  table = new MatTableDataSource();

  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  constructor(
    private service: MainService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private session: SessionStorageService
  ) {
    this.session.set('title', 'BB Adjustment Admin');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.bbAdminFindAdjustments().subscribe(response => {
      this.table.data = response.data;
    });
  }

  add(obj: any): void {
    this.edit({ ...(obj || {}), id: null, new: true });
  }

  edit(obj: any): void {
    const config = new MatDialogConfig();
    config.data = this.formBuilder.group({
      new: [obj.new],
      id: [obj.id],
      pkey: [obj.pkey, Validators.required],
      reason: [obj.reason, Validators.required],
      score: [obj.score, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    this.service.bbAdminSaveAdjustments(form.value).subscribe(response => {
      this.snackbar.open(`Added ${form.value.score} adjustment for ${form.value.reason}`);
      this.dialog.closeAll();
      this.load();
    });
  }

  delete(obj: any) {
    this.service.bbAdminDeleteAdjustments(obj).subscribe(response => {
      this.snackbar.open(`Deleted ${obj.reason} adjustment`);
      this.load();
    });
  }
}
