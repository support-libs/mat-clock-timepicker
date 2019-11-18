import { OnInit, EventEmitter } from '@angular/core';
import { CLOCK_TYPE, ITime } from '../mat-clock/mat-clock.component';
export declare class TimeComponent implements OnInit {
    userTime: ITime;
    userTimeChange: EventEmitter<ITime>;
    revertLabel: string;
    submitLabel: string;
    onRevert: EventEmitter<null>;
    onSubmit: EventEmitter<ITime>;
    color: string;
    VIEW_HOURS: CLOCK_TYPE;
    VIEW_MINUTES: CLOCK_TYPE;
    currentView: CLOCK_TYPE;
    constructor();
    ngOnInit(): void;
    formatHour(): string;
    formatMinute(): string;
    setCurrentView(type: CLOCK_TYPE): void;
    setMeridien(m: 'PM' | 'AM'): void;
    revert(): void;
    submit(): void;
    emituserTimeChange(event: any): void;
}
