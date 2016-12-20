/**
 * tesla-climate.component.ts
 */

// Angular Imports
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CHECKBOX_VALUE_ACCESSOR = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => TeslaClimateComponent),
	multi: true
};

@Component({
	selector: 'tesla-climate',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [CHECKBOX_VALUE_ACCESSOR],
	templateUrl: './tesla-climate.component.html',
	styleUrls: ['./tesla-climate.component.scss']
})
export class TeslaClimateComponent implements ControlValueAccessor {

	// Public Properties
	@Input() public limit: boolean;
	public value: boolean;
	public focused: boolean;

	// Private Properties
	private onTouch: Function;
	private onModelChange: Function;

	// Public Methods

	public registerOnChange(fn: Function) {
		this.onModelChange = fn;
	}

	public registerOnTouched(fn: Function) {
		this.onTouch = fn;
	}

	public writeValue(value: boolean) {
		this.value = value;
	}

	// Private Methods
	private onChange(value: boolean) {
		this.value = !value;
		this.onModelChange(this.value);
	}

	private onBlur(value: boolean) {
		this.focused = false;
	}

	private onFocus(value: boolean) {
		this.focused = value;
		this.onTouch();
	}

}
