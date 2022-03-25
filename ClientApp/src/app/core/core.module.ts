import { NgModule } from '@angular/core';
import { WijmoModule } from './wijmo/wijmo.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { MaterialModule } from './material/material.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


const modules = [WijmoModule, MaterialModule, NgBootstrapModule, FlexLayoutModule];

@NgModule({
  exports: modules,
})
export class CoreModule { }
