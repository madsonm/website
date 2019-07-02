import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-houseguests',
  templateUrl: './houseguests.component.html',
  styleUrls: ['./houseguests.component.scss']
})
export class AdminBigbrotherHouseguestsComponent implements OnInit {
  data = [];

  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  constructor(
    private service: MainService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private session: SessionStorageService
  ) {
    this.session.set('title', 'BB Houseguest Admin');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.bbAdminFindHouseguests().subscribe(response => {
      this.data = response.data;
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
      name: [obj.name, Validators.required],
      fullname: [obj.fullname, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    const data = form.value;
    this.service.bbAdminSaveHouseguests(data).subscribe(response => {
      this.snackbar.open(`${data.new ? 'Added' : 'Updated'} ${data.fullname}`);
      this.dialog.closeAll();
      this.load();
    });
  }

  delete(obj: any) {
    this.service.bbAdminDeleteHouseguests(obj).subscribe(response => {
      this.snackbar.open(`Deleted ${obj.fullname}`);
      this.load();
    });
  }
}
