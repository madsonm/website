import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { MainService } from 'src/app/services/main.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-scoring',
  templateUrl: './table-scoring.component.html',
  styleUrls: ['./table-scoring.component.scss']
})
export class AdminBigbrotherTableScoringComponent implements OnInit {
  columns = ['name', 'score', 'actions']; // Scoring
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
    this.service.bbAdminFindScoring().subscribe(response => {
      this.table.data = response.data;
    });
  }

  add(obj: any): void {
    this.edit(obj || { ...obj, new: true });
  }

  edit(obj: any): void {
    obj.short = `${obj.ekey || ''}`.replace(/^[^_]+_/, '');

    const config = new MatDialogConfig();
    config.data = this.formBuilder.group({
      id: [obj.id],
      short: [obj.short, Validators.required],
      name: [obj.name, Validators.required],
      score: [obj.score, Validators.required]
    });

    this.dialog.open(this.editTemplate, config);
  }

  save(form: FormGroup) {
    console.log(form.value);
  }
}
