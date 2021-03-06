import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { XunkCalendarComponent } from './xunk-calendar.component';

@NgModule({
    declarations: [
        XunkCalendarComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MatIconModule,
        MatButtonModule,
     ],
    exports: [
        XunkCalendarComponent
    ]
})
export class XunkCalendarModule {

    /* Gets today's date */
    public static getToday(): any {
      return XunkCalendarComponent.getToday();
    }
}
