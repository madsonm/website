import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class AdminBigbrotherEventsComponent implements OnInit {
  columns = ['houseguest', 'event', 'date', 'actions']; // Events
  table = new MatTableDataSource();

  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  constructor(
    private service: MainService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private session: SessionStorageService
  ) {
    this.session.set('title', 'BB Event Admin');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.bbAdminFindEvents().subscribe(response => {
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
      ekey: [obj.ekey, Validators.required],
      hkey: [obj.hkey, Validators.required],
      date: [obj.date, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    this.service.bbAdminSaveEvents(form.value).subscribe(response => {
      this.snackbar.open(`Added event`);
      this.dialog.closeAll();
      this.load();
    });
  }

  delete(obj: any) {
    this.service.bbAdminDeleteEvents(obj).subscribe(response => {
      this.snackbar.open(`Deleted event`);
      this.load();
    });
  }
}
