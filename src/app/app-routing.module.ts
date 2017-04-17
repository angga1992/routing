import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { WorkspaceComponent } from './workspace/workspace.component';
import { UsermanComponent } from './userman/userman.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  
  {
    path: 'workspace',
    pathMatch: 'full',
    component: WorkspaceComponent
  },
  {
    path: 'userman',
    pathMatch: 'full',
    component: UsermanComponent
  },
  {
    path: 'user',
    pathMatch: 'full',
    component: UserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
