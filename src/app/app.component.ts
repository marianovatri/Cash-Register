import { Component } from '@angular/core';
import { Producto } from './models/producto.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrayComida: Producto[];
  arrayBebida: Producto[];

  productosSeleccionados: Producto[];

  constructor(){

    this.productosSeleccionados = [],

    this.arrayComida = [
      
      new Producto ('Jamon', 'https://s1.eestatic.com/2021/01/22/ciencia/nutricion/553206479_171070440_1024x576.jpg', 200 ),
      new Producto ('Pizza', 'https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png', 150 ),
      new Producto ('Empanadas', 'https://d37k6lxrz24y4c.cloudfront.net/v2/es-ar/e9dc924f238fa6cc29465942875fe8f0/4a618dd3-c7bc-4bf0-9005-a7a99608f29a-600.jpg', 350 ),
      new Producto ('Fideos', 'https://www.diariamenteali.com/medias/receta-de-fideos-con-pollo-a-la-lombarda-1900Wx500H?context=bWFzdGVyfHJvb3R8MTc3MTg3fGltYWdlL2pwZWd8aDFhL2g0Ny85MDc0MTc1MDQ5NzU4L3JlY2V0YS1kZS1maWRlb3MtY29uLXBvbGxvLWEtbGEtbG9tYmFyZGFfMTkwMFd4NTAwSHw5Mjk5ZjhhNmMwYmM4MzQ2MWU0YWIzNjcwYzE4ZjM2OTNmNGVkYWI2NjllMzY3MjZkYzg2NDE3MmVlNzcwODRj', 200 ),
      new Producto ('Hamburguesa', 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg', 500 ),
    
    ]

    this.arrayBebida = [
      new Producto ('Coca-cola', 'https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080006_f.jpg', 50 ),
      new Producto ('Secco', 'https://cdn.ladespensita.com.ar/wp-content/uploads/2020/08/1597458832d565d6966c84cd01cb93a8069df5a268.jpg', 70 ),
      new Producto ('Kola', 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/136/058/products/re-kolita-gaseosa-x-500ml1-f888e090c39ebeebbb15877904145966-640-0.jpg', 10 ),
      new Producto ('Sprite', 'https://beta2.elbaronline.com.ar/wp-content/uploads/2021/03/Sprite-1.75L.jpg', 50 ),

    
    ]
  }

    onProductoSeleccionado($event: any) {

      
      const productoEncontrado =  this.productosSeleccionados.find(producto => producto.nombre === $event.nombre);

      if(productoEncontrado) {
        productoEncontrado.cantidad++;
      } else {
        $event.cantidad = 1
        this.productosSeleccionados.push($event);
      }

    }


}
