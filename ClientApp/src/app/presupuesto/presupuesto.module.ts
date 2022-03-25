import { NgModule } from '@angular/core';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { PresupuestoRoutingModule } from './presupuesto-routing.module';
//import { PresupuestoPrototipoComponent } from './presupuesto-prototipo/presupuesto-prototipo.component';
//import { FormsModule } from '@angular/forms';
//import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    AutocompleteComponent
    //PresupuestoPrototipoComponent
  ],
  imports: [
    //CoreModule,
    //FormsModule,
    PresupuestoRoutingModule
  ]
})
export class PresupuestoModule { }
