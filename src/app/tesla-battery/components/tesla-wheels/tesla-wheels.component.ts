/**
 * tesla-wheels.component.ts
 */

// Angular Imports
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

// Control Accessor
const RADIO_CONTROL_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TeslaWheelsComponent),
	multi: true
};

// Component Declaration
@Component({
	selector: 'tesla-wheels',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [RADIO_CONTROL_ACCESSOR],
	templateUrl: './tesla-wheels.component.html',
	styleUrls: ['./tesla-wheels.component.scss']
})
export class TeslaWheelsComponent implements ControlValueAccessor {

	// Private Properties
	private onModelChange: Function;
	private onTouch: Function;
	private value: string;
	private focused: string;
	private sizes: number[] = [19, 21];

	// Public Properties

	// Constructor
	constructor() { }

	// Public Methods
	public registerOnChange(fn: Function) {
		this.onModelChange = fn;
	}

	public registerOnTouched(fn: Function) {
		this.onTouch = fn;
	}

	public writeValue(value: string) {
		this.value = value;
	}

	// Private Methods
	private onChange(value: string) {
		this.value = value;
		this.onModelChange(value);
	}

	private onBlur(value: string) {
		this.focused = '';
	}

	private onFocus(value: string) {
		this.focused = value;
		this.onTouch();
	}
}
