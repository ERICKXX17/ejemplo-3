import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';

  //propiedades
  producto = {
    id: 0,
    descripcion: '',
    precio: 0
  };

  productos = [
    {id: 1, descripcion: 'Gansito Marinela', precio: 15.50},
    {id: 2, descripcion: 'Doritos', precio: 16.50},
    {id: 3, descripcion: 'Emperador', precio: 23.50},
    {id: 4, descripcion: 'Sabritas', precio: 16.00},
    {id: 5, descripcion: 'Panditas', precio: 10.50},
  ];

  //funcion para agregar productos
  agregarProducto(){
    //validamos que el id no sea 0
    if(this.producto.id == 0){
      alert('El ID debe ser diferente de cero');
      return;
    }
    //verificamos que el id no sea repetido
    for(let i=0;i<this.productos.length;i++){
      if(this.producto.id == this.productos[i].id){
        alert('Ya existe un producto con ese ID');
        return;
      }
    }

    //agregamos el producto al arreglo
    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      precio: this.producto.precio
    });

    //reiniciamos el objeto producto a sus valores iniciales
    this.producto.id = 0,
    this.producto.descripcion = '',
    this.producto.precio = 0;
  }

  //funcion para seleccionar un producto existente
  seleccionarProducto(productoSeleccionado: {id: number; descripcion: string; precio: number}) {
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
  }

  //funcion para modificar el producto
  modificarProducto(){
    for(let i=0; this.productos.length; i++) {
       if(this.producto.id == this.productos[i].id) {
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        //reinciamos el objeto producto
        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.precio = 0;
        return;
       }
    }
    alert('No existe ese ID');
  }

  //funcion para eliminar un producto del arreglo
  eliminarProducto(id:number) {
    for(let i=0; i< this.productos.length; i++) {
      if(id == this.productos[i].id) {
        this.productos.splice(i,1);
      }
    }
  }
}
