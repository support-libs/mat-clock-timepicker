
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

import { CLOCK_TYPE, ITime } from '../mat-clock/mat-clock.component';

export interface DialogData {
  time: ITime;
  color: string;
}

@Component({
    styleUrls: ['./mat-time-dialog.component.scss'],
    templateUrl: './mat-time-dialog.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TimeDialogComponent {

    public userTime: ITime;
    private VIEW_HOURS = CLOCK_TYPE.HOURS;
    private VIEW_MINUTES = CLOCK_TYPE.MINUTES;
    private currentView: CLOCK_TYPE = this.VIEW_HOURS;

    constructor(
        @Inject(MAT_DIALOG_DATA) private data: DialogData,
        @Inject(MAT_DIALOG_DATA) public color: string,
        private dialogRef: MatDialogRef<TimeDialogComponent>) {

        this.userTime = data.time;
        this.color = data.color;
    }

    public revert() {

        this.dialogRef.close(-1);
    }

    public submit() {

        this.dialogRef.close(this.userTime);
    }
}
