import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatGridListModule,
  MatDialogModule,
  MatInputModule,
  MatBadgeModule,
  MatSelectModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    MatBadgeModule,
    MatSelectModule,
    MatTabsModule,
    MatMenuModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
