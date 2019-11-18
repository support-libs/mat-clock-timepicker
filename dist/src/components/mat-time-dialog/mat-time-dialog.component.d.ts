import { MatDialogRef } from '@angular/material';
import { ITime } from '../mat-clock/mat-clock.component';
export interface DialogData {
    time: ITime;
    color: string;
}
export declare class TimeDialogComponent {
    private data;
    color: string;
    private dialogRef;
    userTime: ITime;
    private VIEW_HOURS;
    private VIEW_MINUTES;
    private currentView;
    constructor(data: DialogData, color: string, dialogRef: MatDialogRef<TimeDialogComponent>);
    revert(): void;
    submit(): void;
}
