import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-picks',
  templateUrl: './picks.component.html',
  styleUrls: ['./picks.component.scss']
})
export class AdminBigbrotherPicksComponent implements OnInit {
  columns = ['player', 'houseguest', 'start', 'end', 'actions']; // Picks
  table = new MatTableDataSource();

  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  constructor(
    private service: MainService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private session: SessionStorageService
  ) {
    this.session.set('title', 'BB Picks Admin');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.bbAdminFindPicks().subscribe(response => {
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
      hkey: [obj.hkey, Validators.required],
      start: [obj.start, Validators.required],
      end: [obj.end, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    this.service.bbAdminSavePicks(form.value).subscribe(response => {
      this.snackbar.open(`Added pick`);
      this.dialog.closeAll();
      this.load();
    });
  }

  delete(obj: any) {
    this.service.bbAdminDeletePicks(obj).subscribe(response => {
      this.snackbar.open(`Deleted pick`);
      this.load();
    });
  }
}
