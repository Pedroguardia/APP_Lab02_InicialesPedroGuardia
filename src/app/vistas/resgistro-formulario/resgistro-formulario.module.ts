import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistroFormularioPageRoutingModule } from './resgistro-formulario-routing.module';

import { ResgistroFormularioPage } from './resgistro-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistroFormularioPageRoutingModule
  ],
  declarations: [ResgistroFormularioPage]
})
export class ResgistroFormularioPageModule {}
