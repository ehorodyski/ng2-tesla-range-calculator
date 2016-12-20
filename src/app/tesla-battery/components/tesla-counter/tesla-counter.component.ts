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
export class TeslaCounterComponent implements ControlValueAccessor {

	// Private Properties
	private onTouch: Function;
	private onModelChange: Function;

	// Public Properties
	@Input() public step: number = 1;
	@Input() public min: number;
	@Input() public max: number;
	@Input() public title: string = '';
	@Input() public unit: string = '';
	public value: number;
	public focused: boolean;

	// Public Functions

	public registerOnChange(fn: Function) {
		this.onModelChange = fn;
	}

	public registerOnTouched(fn: Function) {
		this.onTouch = fn;
	}

	public writeValue(value: number) {
		this.value = value;
	}

	public increment() {
		if (this.value < this.max) {
			this.onChange(this.value + this.step);
		}
		this.onTouch();
	}

	public decrement() {
		if (this.value > this.min) {
			this.onChange(this.value - this.step);
		}
		this.onTouch();
	}

	// Private Methods

	private onBlur(event: FocusEvent) {
		this.focused = false;
		event.preventDefault();
		event.stopPropagation();
	}

	private onChange(value: number) {
		this.value = value;
		this.onModelChange(value);
	}

	private onKeyUp(event: KeyboardEvent) {
		let handlers = {
			ArrowDown: () => this.decrement(),
			ArrowUp: () => this.increment()
		};
		if (handlers[event.code]) {
			handlers[event.code]();
			event.preventDefault();
			event.stopPropagation();
		}
	}

	private onFocus(event: FocusEvent) {
		this.focused = true;
		event.preventDefault();
		event.stopPropagation();
	}

}
