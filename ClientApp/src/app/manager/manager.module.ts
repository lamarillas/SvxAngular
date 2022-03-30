import { NgModule } from '@angular/core';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';

// 2. Remove routes array
//export const managerModuleRoutes: Routes = [
//  { path: '', component: ManagerHomeComponent }
//]

@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    // 3. Add back ManagerRoutingModule
    ManagerRoutingModule,
  ],
  exports: [
    ManagerComponent
  ]
})

export class ManagerModule { }
