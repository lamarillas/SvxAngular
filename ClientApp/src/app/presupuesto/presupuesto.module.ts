import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { PresupuestoPrototipoComponent } from './presupuesto-prototipo/presupuesto-prototipo.component';
import { WijmoModule } from '../core/wijmo/wijmo.module';
import { NgBootstrapModule } from '../core/ng-bootstrap/ng-bootstrap.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AutocompleteComponent,
    PresupuestoPrototipoComponent
  ],
  imports: [
    CommonModule,
    //WijmoModule,
    //NgBootstrapModule,
    CoreModule,
    FormsModule,
    PresupuestoRoutingModule
  ],
  //exports: [
  //  PresupuestoModule
  //]
})
export class PresupuestoModule { }
