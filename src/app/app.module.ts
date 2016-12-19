/**
 * app.module.ts
 */

// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tesla Battery Module
import { TeslaBatteryModule } from './tesla-battery/tesla-battery.module';

// App Component
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		TeslaBatteryModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
