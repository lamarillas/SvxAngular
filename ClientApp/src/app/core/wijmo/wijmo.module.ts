import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import Wijmo modules
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WjChartModule,
    WjGridModule
  ],
  exports: [
    WjChartModule,
    WjGridModule
  ]
})
export class WijmoModule { }
