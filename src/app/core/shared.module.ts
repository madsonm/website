import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';

import { NGX_MAT_DATE_FORMATS,NgxMatDateAdapter } from '@angular-material-components/datetime-picker';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TitleCasePipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NumberOrdinalPipe } from 'src/app/core/pipes/number-ordinal.pipe';
import { SubsetPipe } from 'src/app/core/pipes/subset.pipe';
import { CUSTOM_DATE_FORMATS,CustomDateAdapter } from './adapters/datetime.adapter';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';
import { MaterialModule } from './material.module';
import { FilterByNotPipe } from './pipes/filter-by-not.pipe';

@NgModule({
	imports: [
		CommonModule
		,FlexLayoutModule
		,FormsModule
		,ReactiveFormsModule
		,MaterialModule
		,ClipboardModule
		,DragDropModule
		,NgPipesModule
	]
	,declarations: [
		NumberOrdinalPipe
		,SubsetPipe
		,FilterByNotPipe
		,ModalConfirmComponent
	]
	,exports: [
		CommonModule
		,FlexLayoutModule
		,FormsModule
		,ReactiveFormsModule
		,MaterialModule
		,ClipboardModule
		,DragDropModule
		,NgPipesModule
		,NumberOrdinalPipe
		,SubsetPipe
		,FilterByNotPipe
		,ModalConfirmComponent
	]
	,providers: [
		TitleCasePipe
		,{ provide: NgxMatDateAdapter,useClass: CustomDateAdapter }
		,{ provide: NGX_MAT_DATE_FORMATS,useValue: CUSTOM_DATE_FORMATS }
	]
	,schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
