import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./vistas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'resgistro-formulario',
    loadChildren: () => import('./vistas/resgistro-formulario/resgistro-formulario.module').then( m => m.ResgistroFormularioPageModule)
  },
  {
    path: 'lista-formulario',
    loadChildren: () => import('./vistas/lista-formulario/lista-formulario.module').then( m => m.ListaFormularioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
