import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
//import { managerModuleRoutes } from './manager/manager.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // 4. Implement loadChildren attribute.
  { path: 'manager', loadChildren: () => import('./manager/manager.module').then(module => module.ManagerModule) },
  { path: 'presupuesto', loadChildren: () => import('./presupuesto/presupuesto.module').then(module => module.PresupuestoModule) },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
