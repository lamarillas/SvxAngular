import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoPrototipoComponent } from './presupuesto-prototipo/presupuesto-prototipo.component';

const routes: Routes = [
  { path: '', redirectTo: '/presupuesto/home', pathMatch: 'full' },
  { path: 'home', component: PresupuestoPrototipoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresupuestoRoutingModule { }
