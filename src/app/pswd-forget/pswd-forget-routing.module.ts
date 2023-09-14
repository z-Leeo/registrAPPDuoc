import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PswdForgetPage } from './pswd-forget.page';

const routes: Routes = [
  {
    path: '',
    component: PswdForgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PswdForgetPageRoutingModule {}
