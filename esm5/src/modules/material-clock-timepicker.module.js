/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { ClockComponent } from '../components/mat-clock/mat-clock.component';
import { TimeDialogComponent } from '../components/mat-time-dialog/mat-time-dialog.component';
import { TimeComponent } from '../components/mat-time/mat-time.component';
var MaterialClockTimepickerModule = /** @class */ (function () {
    function MaterialClockTimepickerModule() {
    }
    MaterialClockTimepickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatDialogModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatToolbarModule,
                        MatFormFieldModule
                    ],
                    declarations: [
                        TimeDialogComponent,
                        ClockComponent,
                        TimeComponent
                    ],
                    exports: [
                        TimeDialogComponent,
                        ClockComponent,
                        TimeComponent
                    ],
                    entryComponents: [TimeDialogComponent]
                },] }
    ];
    return MaterialClockTimepickerModule;
}());
export { MaterialClockTimepickerModule };
//# sourceMappingURL=material-clock-timepicker.module.js.map