import { NgModule } from '@angular/core';

import { ManagerRoutingModule } from './manager-routing.module';

// 2. Remove routes array
//export const managerModuleRoutes: Routes = [
//  { path: '', component: ManagerHomeComponent }
//]

@NgModule({
  declarations: [],
  imports: [
    // 3. Add back ManagerRoutingModule
    ManagerRoutingModule,
    
  ]
})

export class ManagerModule { }
