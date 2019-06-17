import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, OnDestroy {
  name: string;
  event = <any>{};

  columns = ['name', 'accepted'];
  dataSource: MatTableDataSource<any>;

  dialogRef: any;
  @ViewChild('templateAccept', { static: true }) templateAccept: TemplateRef<any>;
  formAccept: FormGroup;
  @ViewChild('templateDecline', { static: true }) templateDecline: TemplateRef<any>;
  formDecline: FormGroup;

  constructor(
    private service: MainService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.route.params.subscribe((params: Params) => {
      this.name = params['event'];
    });
  }

  ngOnInit() {
    this.loadEvent();
  }
  ngOnDestroy(): void { }

  loadEvent() {
    this.service.getEvent(this.name).subscribe(response => {
      const event = { ...response.data };

      event.descr = `${event.descr}`.replace(/\n+/g, '\n').split('\n');

      if (Array.isArray(event.signup)) {
        event.signup.forEach(rec => {
          rec.item = rec.item === 'null' ? null : rec.item;
        });
      }

      this.event = event;
      this.dataSource = new MatTableDataSource(event.signup);
    });
  }

  dialogAcceptOpen() {
    this.formAccept = this.formBuilder.group({
      event: [this.event.event],
      name: ['', Validators.required],
      item: ['', Validators.required],
      count: [1, Validators.required],
      status: ['accepted']
    });

    this.dialogRef = this.dialog.open(this.templateAccept);
  }

  dialogDeclineOpen() {
    this.formDecline = this.formBuilder.group({
      event: [this.event.event],
      name: ['', Validators.required],
      item: [''],
      count: [0],
      status: ['declined']
    });

    this.dialogRef = this.dialog.open(this.templateDecline);
  }

  dialogSubmit(form) {
    this.service.addAttendee(form.value).subscribe(response => {
      this.loadEvent();
      this.dialogRef.close();
    });
  }
}
