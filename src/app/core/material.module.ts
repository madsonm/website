import { NgxMatDatetimePickerModule,NgxMatNativeDateModule,NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DEFAULT_OPTIONS,MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS,MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS,MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxUiLoaderConfig,NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
	imports: [
		LayoutModule
		,MatIconModule
		,NgxMatDatetimePickerModule
		,NgxMatTimepickerModule
		,NgxMatNativeDateModule
		,NgxChartsModule

		// ,NgxMatTimepickerModule
		// ,MatDatepickerModule
		// ,NgxMatDatetimePickerModule

		,NgxUiLoaderModule.forRoot({fastFadeOut: true,blur:10} as NgxUiLoaderConfig)
	]
	,exports: [
		MatMenuModule
		,MatDialogModule
		,MatInputModule
		,MatTableModule
		,MatChipsModule
		,MatCheckboxModule
		,MatProgressBarModule
		,MatProgressSpinnerModule
		,MatSelectModule
		,MatIconModule
		,MatButtonModule
		,MatSidenavModule
		,MatListModule
		,MatToolbarModule
		,MatExpansionModule
		,MatSnackBarModule
		,MatCardModule
		,MatFormFieldModule
		,MatTableModule
		,MatPaginatorModule
		,MatSortModule
		,MatGridListModule
		,MatTooltipModule
		,MatChipsModule
		,MatBadgeModule
		,MatTabsModule
		,MatSlideToggleModule
		,MatStepperModule
		,MatDividerModule
		,MatBottomSheetModule
		,NgxMatDatetimePickerModule
		,NgxMatTimepickerModule
		,NgxMatNativeDateModule
		,NgxChartsModule
	]
	,providers: [
		{ provide: MAT_DIALOG_DEFAULT_OPTIONS,useValue: { autoFocus: false,hasBackdrop: true,width: '30em' } }
		,{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,useValue: { appearance: 'fill',floatLabel: 'always',hideRequiredMarker: false } }
		,{ provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue: { duration: 5000 } }
	]
})
export class MaterialModule { }
