import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoPrototipoComponent } from './presupuesto-prototipo/presupuesto-prototipo.component';


const routes: Routes = [
  {
    path: 'presupuesto',
    component: PresupuestoPrototipoComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }
