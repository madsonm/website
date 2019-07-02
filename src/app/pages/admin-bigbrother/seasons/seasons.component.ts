import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class AdminBigbrotherSeasonsComponent implements OnInit {
  columns = ['fullname', 'active', 'actions']; // Seasons
  table = new MatTableDataSource();

  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  constructor(
    private service: MainService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private session: SessionStorageService
  ) {
    this.session.set('title', 'BB Season Admin');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.bbAdminFindSeasons().subscribe(response => {
      this.table.data = response.data;
    });
  }

  add(obj: any): void {
    this.edit({ ...(obj || {}), name: null, new: true });
  }

  edit(obj: any): void {
    const config = new MatDialogConfig();

    config.data = this.formBuilder.group({
      new: [obj.new],
      name: [obj.name],
      season: [obj.season, Validators.required],
      fullname: [obj.fullname, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    this.service.bbAdminSaveSeasons(form.value).subscribe(response => {
      this.snackbar.open(`Added ${form.value.fullname}`);
      this.dialog.closeAll();
      this.load();
    });
  }

  delete(obj: any) {
    if (obj.active) {
      this.snackbar.open(`Cannot delete active season.`);
      return;
    }
    this.service.bbAdminDeleteSeasons(obj).subscribe(response => {
      this.snackbar.open(`Deleted ${obj.fullname}`);
      this.load();
    });
  }

  set(obj: any) {
    if (obj.active) {
      this.snackbar.open(`${obj.fullname} is already the active Season.`);
      return;
    }

    this.service.bbAdminSetSeasons(obj).subscribe(response => {
      this.snackbar.open(`${obj.fullname} is now the active Season`);
      this.load();
    });
  }
}
