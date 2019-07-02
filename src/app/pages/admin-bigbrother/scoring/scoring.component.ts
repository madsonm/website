import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-store';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss']
})
export class AdminBigbrotherScoringComponent implements OnInit {
  columns = ['name', 'score', 'actions']; // Scoring
  table = new MatTableDataSource();

  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  constructor(
    private service: MainService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private session: SessionStorageService
  ) {
    this.session.set('title', 'BB Score Admin');
  }

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.bbAdminFindScoring().subscribe(response => {
      this.table.data = response.data;
    });
  }

  add(obj: any): void {
    this.edit({ ...(obj || {}), id: null, new: true });
  }

  edit(obj: any): void {
    obj.short = `${obj.ekey || ''}`.replace(/^[^_]+_/, '');

    const config = new MatDialogConfig();
    config.data = this.formBuilder.group({
      new: [obj.new],
      id: [obj.id],
      short: [obj.short, Validators.required],
      name: [obj.name, Validators.required],
      score: [obj.score, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    this.service.bbAdminSaveScoring(form.value).subscribe(response => {
      this.snackbar.open(`Added ${form.value.name}`);
      this.dialog.closeAll();
      this.load();
    });
  }

  delete(obj: any) {
    this.service.bbAdminDeleteScoring(obj).subscribe(response => {
      this.snackbar.open(`Deleted ${obj.name}`);
      this.load();
    });
  }
}
