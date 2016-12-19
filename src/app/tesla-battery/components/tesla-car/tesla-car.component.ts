/**
 * tesla-car.component.ts
 */

// Imports
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

// Component Definition
@Component({
	selector: 'tesla-car',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './tesla-car.component.html',
	styleUrls: ['./tesla-car.component.scss']
})
export class TeslaCarComponent {

	// Public Properties
	@Input() wheelsize: number;

	// Constructor
	constructor() { }
}
