import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaFormularioPageRoutingModule } from './lista-formulario-routing.module';

import { ListaFormularioPage } from './lista-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaFormularioPageRoutingModule
  ],
  declarations: [ListaFormularioPage]
})
export class ListaFormularioPageModule {}
