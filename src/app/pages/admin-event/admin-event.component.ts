import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import * as moment from 'moment';


@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.scss']
})
export class AdminEventComponent implements OnInit {
  data = null;

  @ViewChild('templateEdit', { static: true }) templateEdit: TemplateRef<any>;
  formEdit: FormGroup;

  constructor(
    private service: MainService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.service.get('RECENT').subscribe(response => {
      this.data = (response.data || []).sort((a, b) =>
        a.date < b.date ? 1 : -1
      );
    });
  }

  dialogAddOpen() {
    this.dialogEditOpen({
      date: new Date().toISOString(),
      status: ['active']
    });
  }

  dialogEditOpen(event: any) {
    const date = moment(event.date).format('YYYY-MM-DDTHH:mm');

    this.formEdit = this.formBuilder.group({
      event: [event.event],
      title: [event.title, Validators.required],
      date: [date, Validators.required],
      type: [event.type, Validators.required],
      location: [event.location, Validators.required],
      owner: [event.owner, Validators.required],
      link: [event.link],
      image: [event.image],
      status: [event.status]
    });

    this.dialog.open(this.templateEdit);
  }

  dialogEditSubmit(form: any) {
    if (form.invalid) { return; }

    form.date = form.date.toISOString();

    console.log(form.values);
  }
}
