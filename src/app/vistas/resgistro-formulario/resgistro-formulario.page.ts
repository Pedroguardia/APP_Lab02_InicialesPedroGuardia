import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resgistro-formulario',
  templateUrl: './resgistro-formulario.page.html',
  styleUrls: ['./resgistro-formulario.page.scss'],
})
export class ResgistroFormularioPage implements OnInit {

  public Boton_Lista;

  constructor() { }

  ngOnInit() {
    this.Boton_Lista = " a Lista Formularo"
  }

}
