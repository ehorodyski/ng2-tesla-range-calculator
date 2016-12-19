/**
 * tesla-stats.component.ts
 */

// Angular Imports
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

// Interface Imports
import { Stat } from '../../models/stats.interface';

// Component Declaration
@Component({
	selector: 'tesla-stats',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './tesla-stats.component.html',
	styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent {

	// Public Properties
	@Input() stats: Stat[];
}
