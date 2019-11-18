/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { CLOCK_TYPE } from '../mat-clock/mat-clock.component';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.time;
    /** @type {?} */
    DialogData.prototype.color;
}
var TimeDialogComponent = /** @class */ (function () {
    function TimeDialogComponent(data, color, dialogRef) {
        this.data = data;
        this.color = color;
        this.dialogRef = dialogRef;
        this.VIEW_HOURS = CLOCK_TYPE.HOURS;
        this.VIEW_MINUTES = CLOCK_TYPE.MINUTES;
        this.currentView = this.VIEW_HOURS;
        this.userTime = data.time;
        this.color = data.color;
    }
    /**
     * @return {?}
     */
    TimeDialogComponent.prototype.revert = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(-1);
    };
    /**
     * @return {?}
     */
    TimeDialogComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close(this.userTime);
    };
    TimeDialogComponent.decorators = [
        { type: Component, args: [{
                    template: "\n<div mat-dialog-content class=\"mat-timepicker-dialog\">\n    <mat-time [color]=\"color\" [userTime]=\"userTime\" (onRevert)=\"revert()\" (onSubmit)=\"submit()\"></mat-time>\n</div>\n\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".mat-timepicker-dialog {\n  padding: 0;\n  margin: -24px;\n  width: calc(100% + 48px);\n  max-height: unset; }\n"]
                }] }
    ];
    /** @nocollapse */
    TimeDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: String, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: MatDialogRef }
    ]; };
    return TimeDialogComponent;
}());
export { TimeDialogComponent };
if (false) {
    /** @type {?} */
    TimeDialogComponent.prototype.userTime;
    /** @type {?} */
    TimeDialogComponent.prototype.VIEW_HOURS;
    /** @type {?} */
    TimeDialogComponent.prototype.VIEW_MINUTES;
    /** @type {?} */
    TimeDialogComponent.prototype.currentView;
    /** @type {?} */
    TimeDialogComponent.prototype.data;
    /** @type {?} */
    TimeDialogComponent.prototype.color;
    /** @type {?} */
    TimeDialogComponent.prototype.dialogRef;
}
//# sourceMappingURL=mat-time-dialog.component.js.map