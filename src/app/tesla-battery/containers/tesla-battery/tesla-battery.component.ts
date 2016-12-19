/**
 * tesla-battery.component.ts
 */

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

// Module Imports
import { Stat } from '../../models/stats.interface';
import { BatteryService } from '../../tesla-battery.service';

// Component Definition
@Component({
	selector: 'tesla-battery',
	templateUrl: './tesla-battery.component.html',
	styleUrls: ['./tesla-battery.component.scss']
})
export class TeslaBatteryComponent implements OnInit {

	// Private Properties
	private results: Array<string> = ['60', '60D', '75', '75D', '90D', 'P100D'];

	// Public Properties
	public models: any;
	public stats: Stat[];
	public title: string = 'Range Per Charge';
	public tesla: FormGroup;

	// Constructor
	public constructor(public fb: FormBuilder, private batteryService: BatteryService) { }

	// Public Methods
	public ngOnInit() {
		this.models = this.batteryService.getModelData();
		this.tesla = this.fb.group({
			config: this.fb.group({
				speed: 55,
				temperature: 20,
				climate: true,
				wheels: 19
			})
		});
		this.stats = this.calculateStats(this.results, this.tesla.controls['config'].value);
	}

	// Private Methods
	private calculateStats(models, value): Stat[] {
		return models.map(model => {
			const { speed, temperature, climate, wheels } = value;
			const miles = this.models[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];
			return { model, miles };
		});
	}
}
