/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
/** @enum {number} */
const CLOCK_TYPE = {
    HOURS: 1,
    MINUTES: 2,
};
export { CLOCK_TYPE };
CLOCK_TYPE[CLOCK_TYPE.HOURS] = 'HOURS';
CLOCK_TYPE[CLOCK_TYPE.MINUTES] = 'MINUTES';
/**
 * @record
 */
export function ITime() { }
if (false) {
    /** @type {?} */
    ITime.prototype.hour;
    /** @type {?} */
    ITime.prototype.minute;
    /** @type {?} */
    ITime.prototype.meriden;
    /** @type {?} */
    ITime.prototype.format;
}
export class ClockComponent {
    constructor() {
        this.userTimeChange = new EventEmitter();
        this.viewChange = new EventEmitter();
        this.steps = new Array();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setupUI();
    }
    /**
     * @return {?}
     */
    setupUI() {
        this.steps = new Array();
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                for (let i = 1; i <= this.userTime.format; i++) {
                    this.steps.push(i);
                    this.selectedTimePart = this.userTime.hour || 0;
                    if (this.selectedTimePart > this.userTime.format) {
                        this.selectedTimePart -= this.userTime.format;
                    }
                }
                break;
            case CLOCK_TYPE.MINUTES:
                for (let i = 5; i <= 55; i += 5) {
                    this.steps.push(i);
                }
                this.steps.push(0);
                this.selectedTimePart = this.userTime.minute || 0;
                break;
        }
    }
    /**
     * @return {?}
     */
    getPointerStyle() {
        /** @type {?} */
        let divider = 1;
        switch (this.currentView) {
            case CLOCK_TYPE.HOURS:
                divider = this.userTime.format;
                break;
            case CLOCK_TYPE.MINUTES:
                divider = 60;
                break;
        }
        /** @type {?} */
        let degrees = 0;
        if (this.currentView === CLOCK_TYPE.HOURS) {
            degrees = Math.round(this.userTime.hour * (360 / divider)) - 180;
        }
        else {
            degrees = Math.round(this.userTime.minute * (360 / divider)) - 180;
        }
        /** @type {?} */
        const style = {
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
        };
        return style;
    }
    /**
     * @param {?} step
     * @param {?} index
     * @return {?}
     */
    getTimeValueClass(step, index) {
        if (this.currentView === CLOCK_TYPE.HOURS) {
            this.STEP_DEG = 360 / this.userTime.format;
        }
        else {
            this.STEP_DEG = 360 / 12;
        }
        /** @type {?} */
        let classes = 'mat-clock-step mat-clock-deg' + (this.STEP_DEG * (index + 1));
        if (this.selectedTimePart === step) {
            classes += ' mat-primary';
        }
        return classes;
    }
    /**
     * @param {?} step
     * @return {?}
     */
    changeTimeValue(step) {
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
    }
}
ClockComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-clock',
                template: "<div class=\"mat-clock-wrapper\">\n    <div class=\"mat-clock\">\n        <div class=\"mat-clock-container\">\n\n            <!-- Clock center -->\n            <button  mat-mini-fab [color]=\"color\" class=\"mat-clock-center\"></button>\n\n            <!-- Clock hand -->\n            <mat-toolbar [ngStyle]=\"getPointerStyle()\" [color]=\"color\" class=\"mat-pointer\">\n                <button mat-mini-fab [color]=\"color\" class=\"mat-clock-selected\"></button>\n            </mat-toolbar>\n\n            <!-- Hour / Minute number faces -->\n            <div *ngFor=\"let step of steps; let i = index\" [class]=\"getTimeValueClass(step, i)\" >\n                <button mat-mini-fab\n                    [color]=\"selectedTimePart === step ? color : ''\"\n                    (click)=\"changeTimeValue(step)\">\n                    {{ step === 24 ? 0 : step }}\n                </button>\n            </div>\n\n        </div>\n    </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".mat-clock-wrapper {\n  height: 100%;\n  padding: 0 24px;\n  flex-direction: row;\n  box-sizing: border-box;\n  display: flex;\n  place-content: center;\n  align-items: center; }\n  .mat-clock-wrapper .mat-clock {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    cursor: pointer;\n    padding: 24px;\n    background: #ededed; }\n    .mat-clock-wrapper .mat-clock .mat-clock-container {\n      width: 100%;\n      height: 100%;\n      position: relative;\n      display: block; }\n    .mat-clock-wrapper .mat-clock .mat-clock-center {\n      height: 6px;\n      width: 6px;\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      margin: auto;\n      border-radius: 50%; }\n    .mat-clock-wrapper .mat-clock .mat-pointer {\n      box-shadow: none;\n      width: 1px;\n      height: 50%;\n      position: absolute;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      margin: 0 auto;\n      padding: 0;\n      transform-origin: top center;\n      transition: transform 200ms;\n      z-index: 0;\n      pointer-events: none; }\n    .mat-clock-wrapper .mat-clock .mat-clock-step {\n      display: block;\n      position: absolute;\n      transform: translate(-50%, -50%);\n      transition: transform 200ms; }\n      .mat-clock-wrapper .mat-clock .mat-clock-step .mat-mini-fab {\n        box-shadow: none;\n        background-color: transparent; }\n    .mat-clock-wrapper .mat-clock .mat-clock-selected {\n      position: absolute;\n      bottom: -19px;\n      left: -19px;\n      min-width: 0;\n      min-height: 0;\n      pointer-events: none;\n      box-shadow: none;\n      cursor: none; }\n\n.mat-clock-deg0 {\n  top: 0%;\n  left: 50%; }\n\n.mat-clock-deg15 {\n  top: 1.70370869%;\n  left: 62.94095226%; }\n\n.mat-clock-deg30 {\n  top: 6.69872981%;\n  left: 75%; }\n\n.mat-clock-deg45 {\n  top: 14.64466094%;\n  left: 85.35533905%; }\n\n.mat-clock-deg60 {\n  top: 25%;\n  left: 93.30127019%; }\n\n.mat-clock-deg75 {\n  top: 37.05904774%;\n  left: 98.29629131%; }\n\n.mat-clock-deg90 {\n  top: 50%;\n  left: 100%; }\n\n.mat-clock-deg105 {\n  top: 62.94095226%;\n  left: 98.29629131%; }\n\n.mat-clock-deg120 {\n  top: 75%;\n  left: 93.30127019%; }\n\n.mat-clock-deg135 {\n  top: 85.35533906%;\n  left: 85.35533906%; }\n\n.mat-clock-deg150 {\n  top: 93.30127019%;\n  left: 75%; }\n\n.mat-clock-deg165 {\n  top: 98.29629131%;\n  left: 62.94095226%; }\n\n.mat-clock-deg180 {\n  top: 100%;\n  left: 50%; }\n\n.mat-clock-deg195 {\n  top: 98.29629131%;\n  left: 37.05904774%; }\n\n.mat-clock-deg210 {\n  top: 93.30127019%;\n  left: 25%; }\n\n.mat-clock-deg225 {\n  top: 85.35533906%;\n  left: 14.64466094%; }\n\n.mat-clock-deg240 {\n  top: 75%;\n  left: 6.69872981%; }\n\n.mat-clock-deg255 {\n  top: 62.94095226%;\n  left: 1.703708686%; }\n\n.mat-clock-deg270 {\n  top: 50%;\n  left: 0%; }\n\n.mat-clock-deg285 {\n  top: 37.05904774%;\n  left: 1.703708686%; }\n\n.mat-clock-deg300 {\n  top: 25%;\n  left: 6.69872981%; }\n\n.mat-clock-deg315 {\n  top: 14.64466094%;\n  left: 14.64466094%; }\n\n.mat-clock-deg330 {\n  top: 6.69872981%;\n  left: 25%; }\n\n.mat-clock-deg345 {\n  top: 1.703708686%;\n  left: 37.05904774%; }\n\n.mat-clock-deg360 {\n  top: 0%;\n  left: 50%; }\n"]
            }] }
];
ClockComponent.propDecorators = {
    userTime: [{ type: Input }],
    userTimeChange: [{ type: Output }],
    currentView: [{ type: Input }],
    viewChange: [{ type: Output }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ClockComponent.prototype.userTime;
    /** @type {?} */
    ClockComponent.prototype.userTimeChange;
    /** @type {?} */
    ClockComponent.prototype.currentView;
    /** @type {?} */
    ClockComponent.prototype.viewChange;
    /** @type {?} */
    ClockComponent.prototype.color;
    /** @type {?} */
    ClockComponent.prototype.steps;
    /** @type {?} */
    ClockComponent.prototype.selectedTimePart;
    /** @type {?} */
    ClockComponent.prototype.STEP_DEG;
}
//# sourceMappingURL=mat-clock.component.js.map