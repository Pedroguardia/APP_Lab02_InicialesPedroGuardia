import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFormularioPage } from './lista-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: ListaFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFormularioPageRoutingModule {}
