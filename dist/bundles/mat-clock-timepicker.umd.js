(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('mat-clock-timepicker', ['exports', '@angular/core', '@angular/material', '@angular/common'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.matClockTimepicker = {}), global.ng.core, global.ng.material, global.ng.common));
}(this, function (exports, core, material, common) { 'use strict';

    /**
     * @license mat-clock-timepicker
     * MIT license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var CLOCK_TYPE = {
        HOURS: 1,
        MINUTES: 2,
    };
    CLOCK_TYPE[CLOCK_TYPE.HOURS] = 'HOURS';
    CLOCK_TYPE[CLOCK_TYPE.MINUTES] = 'MINUTES';
    var ClockComponent = /** @class */ (function () {
        function ClockComponent() {
            this.userTimeChange = new core.EventEmitter();
            this.viewChange = new core.EventEmitter();
            this.steps = new Array();
        }
        /**
         * @return {?}
         */
        ClockComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this.setupUI();
        };
        /**
         * @return {?}
         */
        ClockComponent.prototype.setupUI = /**
         * @return {?}
         */
        function () {
            this.steps = new Array();
            switch (this.currentView) {
                case CLOCK_TYPE.HOURS:
                    for (var i = 1; i <= this.userTime.format; i++) {
                        this.steps.push(i);
                        this.selectedTimePart = this.userTime.hour || 0;
                        if (this.selectedTimePart > this.userTime.format) {
                            this.selectedTimePart -= this.userTime.format;
                        }
                    }
                    break;
                case CLOCK_TYPE.MINUTES:
                    for (var i = 5; i <= 55; i += 5) {
                        this.steps.push(i);
                    }
                    this.steps.push(0);
                    this.selectedTimePart = this.userTime.minute || 0;
                    break;
            }
        };
        /**
         * @return {?}
         */
        ClockComponent.prototype.getPointerStyle = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var divider = 1;
            switch (this.currentView) {
                case CLOCK_TYPE.HOURS:
                    divider = this.userTime.format;
                    break;
                case CLOCK_TYPE.MINUTES:
                    divider = 60;
                    break;
            }
            /** @type {?} */
            var degrees = 0;
            if (this.currentView === CLOCK_TYPE.HOURS) {
                degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
            }
            else {
                degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
            }
            /** @type {?} */
            var style = {
                '-webkit-transform': 'rotate(' + degrees + 'deg)',
                '-ms-transform': 'rotate(' + degrees + 'deg)',
                'transform': 'rotate(' + degrees + 'deg)'
            };
            return style;
        };
        /**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        ClockComponent.prototype.getTimeValueClass = /**
         * @param {?} step
         * @param {?} index
         * @return {?}
         */
        function (step, index) {
            if (this.currentView === CLOCK_TYPE.HOURS) {
                this.STEP_DEG = 360 / this.userTime.format;
            }
            else {
                this.STEP_DEG = 360 / 12;
            }
            /** @type {?} */
            var classes = 'mat-clock-step mat-clock-deg' + (this.STEP_DEG * (index + 1));
            if (this.selectedTimePart === step) {
                classes += ' mat-primary';
            }
            return classes;
        };
        /**
         * @param {?} step
         * @return {?}
         */
        ClockComponent.prototype.changeTimeValue = /**
         * @param {?} step
         * @return {?}
         */
        function (step) {
            if (this.currentView === CLOCK_TYPE.HOURS) {
                this.userTime.hour = step;
                // auto switch to minutes
                this.viewChange.emit(CLOCK_TYPE.MINUTES);
            }
            else {
                this.userTime.minute = step;
                // auto switch to hours
                this.viewChange.emit(CLOCK_TYPE.HOURS);
            }
            this.userTimeChange.emit(this.userTime);
        };
        ClockComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-clock',
                        template: "<div class=\"mat-clock-wrapper\">\n    <div class=\"mat-clock\">\n        <div class=\"mat-clock-container\">\n\n            <!-- Clock center -->\n            <button  mat-mini-fab [color]=\"color\" class=\"mat-clock-center\"></button>\n\n            <!-- Clock hand -->\n            <mat-toolbar [ngStyle]=\"getPointerStyle()\" [color]=\"color\" class=\"mat-pointer\">\n                <button mat-mini-fab [color]=\"color\" class=\"mat-clock-selected\"></button>\n            </mat-toolbar>\n\n            <!-- Hour / Minute number faces -->\n            <div *ngFor=\"let step of steps; let i = index\" [class]=\"getTimeValueClass(step, i)\" >\n                <button mat-mini-fab\n                    [color]=\"selectedTimePart === step ? color : ''\"\n                    (click)=\"changeTimeValue(step)\">\n                    {{ step === 24 ? 0 : step }}\n                </button>\n            </div>\n\n        </div>\n    </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".mat-clock-wrapper {\n  height: 100%;\n  padding: 0 24px;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  place-content: center;\n  align-items: center; }\n  .mat-clock-wrapper .mat-clock {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    cursor: pointer;\n    padding: 24px;\n    background: #ededed; }\n    .mat-clock-wrapper .mat-clock .mat-clock-container {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display: block; }\n    .mat-clock-wrapper .mat-clock .mat-clock-center {\n      height: 6px;\n      width: 6px;\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      border-radius: 50%; }\n    .mat-clock-wrapper .mat-clock .mat-pointer {\n      box-shadow: none;\n      width: 1px;\n      height: 50%;\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: 0 auto;\n      padding: 0;\n      transform-origin: top center;\n      transition: transform 200ms;\n      z-index: 0;\n      pointer-events: none; }\n    .mat-clock-wrapper .mat-clock .mat-clock-step {\n      display: block;\n      position: absolute;\n      transform: translate(-50%, -50%);\n      transition: transform 200ms; }\n      .mat-clock-wrapper .mat-clock .mat-clock-step .mat-mini-fab {\n        box-shadow: none;\n        background-color: transparent; }\n    .mat-clock-wrapper .mat-clock .mat-clock-selected {\n      position: absolute;\n      bottom: -19px;\n      left: -19px;\n      min-width: 0;\n      min-height: 0;\n      pointer-events: none;\n      box-shadow: none;\n      cursor: none; }\n\n.mat-clock-deg0 {\n  top: 0%;\n  left: 50%; }\n\n.mat-clock-deg15 {\n  top: 1.70370869%;\n  left: 62.94095226%; }\n\n.mat-clock-deg30 {\n  top: 6.69872981%;\n  left: 75%; }\n\n.mat-clock-deg45 {\n  top: 14.64466094%;\n  left: 85.35533905%; }\n\n.mat-clock-deg60 {\n  top: 25%;\n  left: 93.30127019%; }\n\n.mat-clock-deg75 {\n  top: 37.05904774%;\n  left: 98.29629131%; }\n\n.mat-clock-deg90 {\n  top: 50%;\n  left: 100%; }\n\n.mat-clock-deg105 {\n  top: 62.94095226%;\n  left: 98.29629131%; }\n\n.mat-clock-deg120 {\n  top: 75%;\n  left: 93.30127019%; }\n\n.mat-clock-deg135 {\n  top: 85.35533906%;\n  left: 85.35533906%; }\n\n.mat-clock-deg150 {\n  top: 93.30127019%;\n  left: 75%; }\n\n.mat-clock-deg165 {\n  top: 98.29629131%;\n  left: 62.94095226%; }\n\n.mat-clock-deg180 {\n  top: 100%;\n  left: 50%; }\n\n.mat-clock-deg195 {\n  top: 98.29629131%;\n  left: 37.05904774%; }\n\n.mat-clock-deg210 {\n  top: 93.30127019%;\n  left: 25%; }\n\n.mat-clock-deg225 {\n  top: 85.35533906%;\n  left: 14.64466094%; }\n\n.mat-clock-deg240 {\n  top: 75%;\n  left: 6.69872981%; }\n\n.mat-clock-deg255 {\n  top: 62.94095226%;\n  left: 1.703708686%; }\n\n.mat-clock-deg270 {\n  top: 50%;\n  left: 0%; }\n\n.mat-clock-deg285 {\n  top: 37.05904774%;\n  left: 1.703708686%; }\n\n.mat-clock-deg300 {\n  top: 25%;\n  left: 6.69872981%; }\n\n.mat-clock-deg315 {\n  top: 14.64466094%;\n  left: 14.64466094%; }\n\n.mat-clock-deg330 {\n  top: 6.69872981%;\n  left: 25%; }\n\n.mat-clock-deg345 {\n  top: 1.703708686%;\n  left: 37.05904774%; }\n\n.mat-clock-deg360 {\n  top: 0%;\n  left: 50%; }\n"]
                    }] }
        ];
        ClockComponent.propDecorators = {
            userTime: [{ type: core.Input }],
            userTimeChange: [{ type: core.Output }],
            currentView: [{ type: core.Input }],
            viewChange: [{ type: core.Output }],
            color: [{ type: core.Input }]
        };
        return ClockComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        template: "\n<div mat-dialog-content class=\"mat-timepicker-dialog\">\n    <mat-time [color]=\"color\" [userTime]=\"userTime\" (onRevert)=\"revert()\" (onSubmit)=\"submit()\"></mat-time>\n</div>\n\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".mat-timepicker-dialog {\n  padding: 0;\n  margin: -24px;\n  width: calc(100% + 48px);\n  max-height: unset; }\n"]
                    }] }
        ];
        /** @nocollapse */
        TimeDialogComponent.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] },
            { type: String, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] },
            { type: material.MatDialogRef }
        ]; };
        return TimeDialogComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var TimeComponent = /** @class */ (function () {
        function TimeComponent() {
            this.userTimeChange = new core.EventEmitter();
            this.onRevert = new core.EventEmitter();
            this.onSubmit = new core.EventEmitter();
            this.VIEW_HOURS = CLOCK_TYPE.HOURS;
            this.VIEW_MINUTES = CLOCK_TYPE.MINUTES;
            this.currentView = this.VIEW_HOURS;
        }
        /**
         * @return {?}
         */
        TimeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            if (!this.userTime) {
                this.userTime = {
                    hour: 6,
                    minute: 0,
                    meriden: 'PM',
                    format: 12
                };
            }
            if (!this.revertLabel) {
                this.revertLabel = 'Cancel';
            }
            if (!this.submitLabel) {
                this.submitLabel = 'Okay';
            }
        };
        /**
         * @return {?}
         */
        TimeComponent.prototype.formatHour = /**
         * @return {?}
         */
        function () {
            if (this.userTime.format === 24) {
                if (this.userTime.hour === 24) {
                    return '00';
                }
                else if (this.userTime.hour < 10) {
                    return '0' + String(this.userTime.hour);
                }
            }
            return String(this.userTime.hour);
        };
        /**
         * @return {?}
         */
        TimeComponent.prototype.formatMinute = /**
         * @return {?}
         */
        function () {
            if (this.userTime.minute === 0) {
                return '00';
            }
            else if (this.userTime.minute < 10) {
                return '0' + String(this.userTime.minute);
            }
            else {
                return String(this.userTime.minute);
            }
        };
        /**
         * @param {?} type
         * @return {?}
         */
        TimeComponent.prototype.setCurrentView = /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this.currentView = type;
        };
        /**
         * @param {?} m
         * @return {?}
         */
        TimeComponent.prototype.setMeridien = /**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            this.userTime.meriden = m;
        };
        /**
         * @return {?}
         */
        TimeComponent.prototype.revert = /**
         * @return {?}
         */
        function () {
            this.onRevert.emit();
        };
        /**
         * @return {?}
         */
        TimeComponent.prototype.submit = /**
         * @return {?}
         */
        function () {
            this.onSubmit.emit(this.userTime);
        };
        /**
         * @param {?} event
         * @return {?}
         */
        TimeComponent.prototype.emituserTimeChange = /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.userTimeChange.emit(this.userTime);
        };
        TimeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'mat-time',
                        template: "<div class=\"mat-time vertical-time\">\n  <mat-toolbar class=\"mat-timepicker-time-container\" [color]=\"color\">\n\n      <div class=\"mat-timepicker-selected-time\">\n          <span [class]=\"currentView === VIEW_HOURS ? 'active': ''\" (click)=\"setCurrentView(VIEW_HOURS)\">{{ formatHour() }}:</span>\n          <span [class]=\"currentView === VIEW_MINUTES ? 'active': ''\" (click)=\"setCurrentView(VIEW_MINUTES)\">{{ formatMinute() }}</span>\n      </div>\n      <div class=\"mat-timepicker-selected-ampm\" *ngIf=\"userTime.format === 12\">\n          <span (click)=\"setMeridien('AM')\" [class]=\"userTime.meriden === 'AM' ? 'active' : ''\">AM</span>\n          <span (click)=\"setMeridien('PM')\" [class]=\"userTime.meriden === 'PM' ? 'active' : ''\">PM</span>\n      </div>\n\n  </mat-toolbar>\n\n  <div class=\"mat-time-content\">\n      <mat-clock [color]=\"color\" class=\"mat-animation-zoom\" [userTime]=\"userTime\" (userTimeChange)=\"emituserTimeChange($event)\" [(currentView)]=\"currentView\" (viewChange)=\"setCurrentView($event)\"></mat-clock>\n\n      <div styles=\"{align-self: flex-end;}\">\n          <button mat-button (click)=\"revert()\">{{revertLabel}}</button>\n          <button mat-button [color]=\"color\" (click)=\"submit()\">{{submitLabel}}</button>\n      </div>\n  </div>\n</div>\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [":host {\n  display: block; }\n\n.mat-time {\n  max-height: 100%;\n  min-height: 350px;\n  height: 350px;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  place-content: center;\n  align-items: center; }\n  .mat-time .mat-timepicker-time-container {\n    padding: 15px;\n    min-width: 160px;\n    width: 160px;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex;\n    place-content: center;\n    align-items: center; }\n    .mat-time .mat-timepicker-time-container.mat-toolbar-single-row {\n      height: 100%; }\n  .mat-time .mat-timepicker-selected-time {\n    font-size: 3.5rem;\n    font-weight: 400;\n    display: flex; }\n  .mat-time .mat-timepicker-selected-ampm {\n    font-size: 1rem;\n    line-height: 1.3rem;\n    padding-top: 2rem;\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n    place-content: center;\n    align-items: center; }\n  .mat-time .mat-time-content {\n    width: 100%;\n    height: 100%;\n    padding: 6px;\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n    place-content: center space-between;\n    align-items: center; }\n    .mat-time .mat-time-content mat-clock {\n      padding: 12px 0;\n      height: calc(100% - 58px); }\n  .mat-time.vertical-time {\n    height: auto; }\n    .mat-time.vertical-time .mat-timepicker-time-container {\n      min-width: auto;\n      width: 100%;\n      height: 100px; }\n      .mat-time.vertical-time .mat-timepicker-time-container .mat-timepicker-selected-ampm {\n        padding: 0 12px; }\n\n.mat-timepicker-selected-time > span, .mat-timepicker-selected-ampm > span {\n  outline: 0;\n  opacity: 0.5; }\n\n.mat-timepicker-selected-time > span:not(.active), .mat-timepicker-selected-ampm > span:not(.active) {\n  cursor: pointer; }\n\n.mat-timepicker-selected-time > span.active, .mat-timepicker-selected-ampm > span.active {\n  opacity: 1; }\n\n.mat-animate-next {\n  opacity: 0;\n  -webkit-transform: translate3d(50%, 0, 1px);\n  transform: translate3d(50%, 0, 1px); }\n\n.mat-animate-next-remove {\n  -webkit-transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  opacity: 0;\n  -webkit-transform: translate3d(50%, 0, 1px);\n  transform: translate3d(50%, 0, 1px); }\n\n.mat-animate-next-remove-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 1px);\n  transform: translate3d(0, 0, 1px); }\n\n.mat-animate-prev {\n  opacity: 0;\n  -webkit-transform: translate3d(-50%, 0, 1px);\n  transform: translate3d(-50%, 0, 1px); }\n\n.mat-animate-prev-remove {\n  -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  opacity: 0;\n  -webkit-transform: translate3d(-50%, 0, 1px);\n  transform: translate3d(-50%, 0, 1px); }\n\n.mat-animate-prev-remove-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 1px);\n  transform: translate3d(0, 0, 1px); }\n\n@-webkit-keyframes mat-animation-bounce {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95); }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes mat-animation-bounce {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95); }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.mat-animation-zoom.ng-enter {\n  -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-name: mat-animation-bounce;\n  animation-name: mat-animation-bounce; }\n"]
                    }] }
        ];
        /** @nocollapse */
        TimeComponent.ctorParameters = function () { return []; };
        TimeComponent.propDecorators = {
            userTime: [{ type: core.Input }],
            userTimeChange: [{ type: core.Output }],
            revertLabel: [{ type: core.Input }],
            submitLabel: [{ type: core.Input }],
            onRevert: [{ type: core.Output }],
            onSubmit: [{ type: core.Output }],
            color: [{ type: core.Input }]
        };
        return TimeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var MaterialClockTimepickerModule = /** @class */ (function () {
        function MaterialClockTimepickerModule() {
        }
        MaterialClockTimepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatDialogModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatSelectModule,
                            material.MatToolbarModule,
                            material.MatFormFieldModule
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

    exports.ClockComponent = ClockComponent;
    exports.MaterialClockTimepickerModule = MaterialClockTimepickerModule;
    exports.TimeComponent = TimeComponent;
    exports.TimeDialogComponent = TimeDialogComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=mat-clock-timepicker.umd.js.map
