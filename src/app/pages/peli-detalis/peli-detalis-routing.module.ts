import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliDetalisPage } from './peli-detalis.page';

const routes: Routes = [
  {
    path: '',
    component: PeliDetalisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeliDetalisPageRoutingModule {}
