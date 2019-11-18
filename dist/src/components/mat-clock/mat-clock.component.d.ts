import { EventEmitter, OnChanges } from '@angular/core';
export declare enum CLOCK_TYPE {
    HOURS = 1,
    MINUTES = 2
}
export declare type TimeFormat = 12 | 24;
export interface ITime {
    hour: number;
    minute: number;
    meriden: 'PM' | 'AM';
    format: TimeFormat;
}
export declare class ClockComponent implements OnChanges {
    userTime: ITime;
    userTimeChange: EventEmitter<ITime>;
    currentView: CLOCK_TYPE;
    viewChange: EventEmitter<CLOCK_TYPE>;
    color: string;
    steps: number[];
    selectedTimePart: number;
    private STEP_DEG;
    ngOnChanges(): void;
    private setupUI;
    getPointerStyle(): {
        '-webkit-transform': string;
        '-ms-transform': string;
        'transform': string;
    };
    private getTimeValueClass;
    private changeTimeValue;
}
