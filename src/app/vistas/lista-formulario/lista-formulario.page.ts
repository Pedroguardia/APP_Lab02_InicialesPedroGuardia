import { Component, OnInit } from '@angular/core';

interface Componente { 
icono: string,
nombre: string,
direcciones: string,

}

@Component({
  selector: 'app-lista-formulario',
  templateUrl: './lista-formulario.page.html',
  styleUrls: ['./lista-formulario.page.scss'],
})
export class ListaFormularioPage implements OnInit {

  componentes:Componente [] = [
    {
      

      icono: "person-circle",
      nombre:"registro-formulario",
      direcciones: "/resgistro-formulario",
    }


  ]

  constructor() { }
  public Boton_inicio;
  public Formulario;

  ngOnInit() {
    this.Boton_inicio = "inicio"
    this.Formulario ="Formulario"
  }

}
