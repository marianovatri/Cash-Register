import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  @Input() arrayProductos: Producto[];

  color:string = 'red';

  constructor() { 

    this.arrayProductos = []

  }

  ngOnInit(): void {
  }

  total() {
    let resultado = 0;
    for(let producto of this.arrayProductos) {
      resultado += (producto.precio * producto.cantidad);
    }
    return resultado;
  }

  onClickBorrar(indice: any) {
    if(this.arrayProductos[indice].cantidad === 1) {
    this.arrayProductos.splice(indice, 1);
  } else {this.arrayProductos[indice].cantidad --;} }

 
}

