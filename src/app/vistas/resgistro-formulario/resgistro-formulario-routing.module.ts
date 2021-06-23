import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistroFormularioPage } from './resgistro-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistroFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistroFormularioPageRoutingModule {}
