/**
 * tesla-counter.component.ts
 */

// Angular Imports
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// Constant
const NUMBER_CONTROL_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TeslaCounterComponent),
	multi: true
};

// Component Declaration
@Component({
	selector: 'tesla-counter',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './tesla-counter.component.html',
	styleUrls: ['./tesla-counter.component.scss'],
	providers: [NUMBER_CONTROL_ACCESSOR]
})
export class TeslaCounterComponent implements ControlValueAccessor { }
