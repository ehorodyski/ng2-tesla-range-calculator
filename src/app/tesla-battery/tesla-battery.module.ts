/**
 * teslaBattery.module.ts
 */

// Module Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Service Imports
import { BatteryService } from './tesla-battery.service';

// Component Imports
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { TeslaCarComponent } from './components/tesla-car/tesla-car.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';

// Module Declaration
@NgModule({
	declarations: [
		TeslaBatteryComponent,
		TeslaCarComponent,
		TeslaStatsComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	providers: [BatteryService],
	exports: [TeslaBatteryComponent]
})
export class TeslaBatteryModule { }
