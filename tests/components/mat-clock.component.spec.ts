import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatButtonToggleModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { CLOCK_TYPE, ITime, TimeFormat } from 'src/components/mat-clock/mat-clock.component';

import { ClockComponent } from '../../src/mat-clock-timepicker';

describe('Component: ClockComponent', () => {
  let fixture: ComponentFixture<ClockComponent>;
  let comp: ClockComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
      declarations: [ClockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClockComponent);
    comp = fixture.componentInstance;
  });

  it('should render the truthy clock', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the clock time', () => {
    const format: TimeFormat = 24;
    const time: ITime = { hour: 10, minute: 20, meriden: 'AM', format: format };
    comp.userTime = { hour: 10, minute: 20, meriden: 'AM', format: format };
    expect(comp.userTime).toEqual(time);
  });

  it('should render the clock format', () => {
    const format: CLOCK_TYPE.HOURS = 1;
    comp.currentView = format;
    expect(comp.currentView).toEqual(format);
  });

  it('should render the clock color', () => {
    const color = '#000';
    comp.color = '#000';
    expect(comp.color).toEqual(color);
  });
});
