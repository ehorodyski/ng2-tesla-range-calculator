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
import { TeslaClimateComponent } from './components/tesla-climate/tesla-climate.component';
import { TeslaCounterComponent } from './components/tesla-counter/tesla-counter.component';
import { TeslaStatsComponent } from './components/tesla-stats/tesla-stats.component';
import { TeslaWheelsComponent } from './components/tesla-wheels/tesla-wheels.component';

// Module Declaration
@NgModule({
	declarations: [
		TeslaBatteryComponent,
		TeslaCarComponent,
		TeslaClimateComponent,
		TeslaCounterComponent,
		TeslaStatsComponent,
		TeslaWheelsComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	],
	providers: [BatteryService],
	exports: [TeslaBatteryComponent]
})
export class TeslaBatteryModule { }
