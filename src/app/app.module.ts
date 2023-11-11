import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AdminGuard } from './core/guards/admin.guard';
import { CacheInterceptor } from './core/interceptors/cache.interceptor';
import { ConfirmInterceptor } from './core/interceptors/confirm.interceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { MaterialModule } from './core/material.module';
import { LoadingService } from './core/services/loading.service';
import { SharedModule } from './core/shared.module';
import { FoodModule } from './modules/food/food.module';
import { LegendaryModule } from './modules/legendary/legendary.module';

@NgModule({
	declarations: [
		AppComponent
	]
	,imports: [
		BrowserModule
		,BrowserAnimationsModule
		,MaterialModule
		,HttpClientModule
		,NgxUiLoaderModule
		,NgxWebstorageModule.forRoot({prefix:'mjm',separator:'_'})
		,SharedModule
//		,BigBrotherModule
		,LegendaryModule
		,FoodModule
		,AppRoutingModule
	]
	,providers: [
		HttpClientModule
		,LoadingService
		,AdminGuard
		,{ provide: HTTP_INTERCEPTORS,useClass: CacheInterceptor,multi: true }
		,{ provide: HTTP_INTERCEPTORS,useClass: LoadingInterceptor,multi: true }
		,{ provide: HTTP_INTERCEPTORS,useClass: LoggingInterceptor,multi: true }
		,{ provide: HTTP_INTERCEPTORS,useClass: ConfirmInterceptor,multi: true }
	]
	,bootstrap: [AppComponent]
})
export class AppModule { }
