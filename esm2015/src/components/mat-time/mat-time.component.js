/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { CLOCK_TYPE } from '../mat-clock/mat-clock.component';
export class TimeComponent {
    constructor() {
        this.userTimeChange = new EventEmitter();
        this.onRevert = new EventEmitter();
        this.onSubmit = new EventEmitter();
        this.VIEW_HOURS = CLOCK_TYPE.HOURS;
        this.VIEW_MINUTES = CLOCK_TYPE.MINUTES;
        this.currentView = this.VIEW_HOURS;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    formatHour() {
        if (this.userTime.format === 24) {
            if (this.userTime.hour === 24) {
                return '00';
            }
            else if (this.userTime.hour < 10) {
                return '0' + String(this.userTime.hour);
            }
        }
        return String(this.userTime.hour);
    }
    /**
     * @return {?}
     */
    formatMinute() {
        if (this.userTime.minute === 0) {
            return '00';
        }
        else if (this.userTime.minute < 10) {
            return '0' + String(this.userTime.minute);
        }
        else {
            return String(this.userTime.minute);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    setCurrentView(type) {
        this.currentView = type;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    setMeridien(m) {
        this.userTime.meriden = m;
    }
    /**
     * @return {?}
     */
    revert() {
        this.onRevert.emit();
    }
    /**
     * @return {?}
     */
    submit() {
        this.onSubmit.emit(this.userTime);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emituserTimeChange(event) {
        this.userTimeChange.emit(this.userTime);
    }
}
TimeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-time',
                template: "<div class=\"mat-time vertical-time\">\n  <mat-toolbar class=\"mat-timepicker-time-container\" [color]=\"color\">\n\n      <div class=\"mat-timepicker-selected-time\">\n          <span [class]=\"currentView === VIEW_HOURS ? 'active': ''\" (click)=\"setCurrentView(VIEW_HOURS)\">{{ formatHour() }}:</span>\n          <span [class]=\"currentView === VIEW_MINUTES ? 'active': ''\" (click)=\"setCurrentView(VIEW_MINUTES)\">{{ formatMinute() }}</span>\n      </div>\n      <div class=\"mat-timepicker-selected-ampm\" *ngIf=\"userTime.format === 12\">\n          <span (click)=\"setMeridien('AM')\" [class]=\"userTime.meriden === 'AM' ? 'active' : ''\">AM</span>\n          <span (click)=\"setMeridien('PM')\" [class]=\"userTime.meriden === 'PM' ? 'active' : ''\">PM</span>\n      </div>\n\n  </mat-toolbar>\n\n  <div class=\"mat-time-content\">\n      <mat-clock [color]=\"color\" class=\"mat-animation-zoom\" [userTime]=\"userTime\" (userTimeChange)=\"emituserTimeChange($event)\" [(currentView)]=\"currentView\" (viewChange)=\"setCurrentView($event)\"></mat-clock>\n\n      <div styles=\"{align-self: flex-end;}\">\n          <button mat-button (click)=\"revert()\">{{revertLabel}}</button>\n          <button mat-button [color]=\"color\" (click)=\"submit()\">{{submitLabel}}</button>\n      </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: [":host {\n  display: block; }\n\n.mat-time {\n  max-height: 100%;\n  min-height: 350px;\n  height: 350px;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  place-content: center;\n  align-items: center; }\n  .mat-time .mat-timepicker-time-container {\n    padding: 15px;\n    min-width: 160px;\n    width: 160px;\n    flex-direction: row;\n    box-sizing: border-box;\n    display: flex;\n    place-content: center;\n    align-items: center; }\n    .mat-time .mat-timepicker-time-container.mat-toolbar-single-row {\n      height: 100%; }\n  .mat-time .mat-timepicker-selected-time {\n    font-size: 3.5rem;\n    font-weight: 400;\n    display: flex; }\n  .mat-time .mat-timepicker-selected-ampm {\n    font-size: 1rem;\n    line-height: 1.3rem;\n    padding-top: 2rem;\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n    place-content: center;\n    align-items: center; }\n  .mat-time .mat-time-content {\n    width: 100%;\n    height: 100%;\n    padding: 6px;\n    flex-direction: column;\n    box-sizing: border-box;\n    display: flex;\n    place-content: center space-between;\n    align-items: center; }\n    .mat-time .mat-time-content mat-clock {\n      padding: 12px 0;\n      height: calc(100% - 58px); }\n  .mat-time.vertical-time {\n    height: auto; }\n    .mat-time.vertical-time .mat-timepicker-time-container {\n      min-width: auto;\n      width: 100%;\n      height: 100px; }\n      .mat-time.vertical-time .mat-timepicker-time-container .mat-timepicker-selected-ampm {\n        padding: 0 12px; }\n\n.mat-timepicker-selected-time > span, .mat-timepicker-selected-ampm > span {\n  outline: 0;\n  opacity: 0.5; }\n\n.mat-timepicker-selected-time > span:not(.active), .mat-timepicker-selected-ampm > span:not(.active) {\n  cursor: pointer; }\n\n.mat-timepicker-selected-time > span.active, .mat-timepicker-selected-ampm > span.active {\n  opacity: 1; }\n\n.mat-animate-next {\n  opacity: 0;\n  -webkit-transform: translate3d(50%, 0, 1px);\n  transform: translate3d(50%, 0, 1px); }\n\n.mat-animate-next-remove {\n  -webkit-transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: all 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  opacity: 0;\n  -webkit-transform: translate3d(50%, 0, 1px);\n  transform: translate3d(50%, 0, 1px); }\n\n.mat-animate-next-remove-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 1px);\n  transform: translate3d(0, 0, 1px); }\n\n.mat-animate-prev {\n  opacity: 0;\n  -webkit-transform: translate3d(-50%, 0, 1px);\n  transform: translate3d(-50%, 0, 1px); }\n\n.mat-animate-prev-remove {\n  -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  opacity: 0;\n  -webkit-transform: translate3d(-50%, 0, 1px);\n  transform: translate3d(-50%, 0, 1px); }\n\n.mat-animate-prev-remove-active {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 1px);\n  transform: translate3d(0, 0, 1px); }\n\n@-webkit-keyframes mat-animation-bounce {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95); }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes mat-animation-bounce {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.95);\n    transform: scale(0.95); }\n  70% {\n    opacity: 1;\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05); }\n  to {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n.mat-animation-zoom.ng-enter {\n  -webkit-transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  -webkit-animation-duration: 0.3s;\n  animation-duration: 0.3s;\n  -webkit-animation-name: mat-animation-bounce;\n  animation-name: mat-animation-bounce; }\n"]
            }] }
];
/** @nocollapse */
TimeComponent.ctorParameters = () => [];
TimeComponent.propDecorators = {
    userTime: [{ type: Input }],
    userTimeChange: [{ type: Output }],
    revertLabel: [{ type: Input }],
    submitLabel: [{ type: Input }],
    onRevert: [{ type: Output }],
    onSubmit: [{ type: Output }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TimeComponent.prototype.userTime;
    /** @type {?} */
    TimeComponent.prototype.userTimeChange;
    /** @type {?} */
    TimeComponent.prototype.revertLabel;
    /** @type {?} */
    TimeComponent.prototype.submitLabel;
    /** @type {?} */
    TimeComponent.prototype.onRevert;
    /** @type {?} */
    TimeComponent.prototype.onSubmit;
    /** @type {?} */
    TimeComponent.prototype.color;
    /** @type {?} */
    TimeComponent.prototype.VIEW_HOURS;
    /** @type {?} */
    TimeComponent.prototype.VIEW_MINUTES;
    /** @type {?} */
    TimeComponent.prototype.currentView;
}
//# sourceMappingURL=mat-time.component.js.map