import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapTabPage } from './mapTab.page';

const routes: Routes = [
  {
    path: '',
    component: MapTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapTabPageRoutingModule {}
