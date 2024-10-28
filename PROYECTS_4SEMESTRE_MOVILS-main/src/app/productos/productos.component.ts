import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }

  cargarProductos(filtro: string): void {
    if (filtro === 'activos') {
      this.productoService.listarProductosActivos().subscribe((data: Producto[]) => {
        this.productos = data;
      });
    } else if (filtro === 'inactivos') {
      this.productoService.listarProductosInactivos().subscribe((data: Producto[]) => {
        this.productos = data;
      });
    } else {
      this.productoService.listarProductos().subscribe((data: Producto[]) => {
        this.productos = data;
      });
    }
  }

  filtrarProductos(filtro: string): void {
    this.cargarProductos(filtro); // Filtrar los productos según el botón seleccionado
  }

  eliminarProducto(id: number | undefined): void {
    if (id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¡No podrás revertir esta acción!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productoService.eliminarProducto(id).subscribe(() => {
            this.cargarProductos('todos'); // Recargar productos después de eliminar
            Swal.fire('¡Eliminado!', 'El producto ha sido eliminado.', 'success');
          });
        }
      });
    }
  }

  recuperarProducto(id: number | undefined): void {
    if (id !== undefined) {
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas restaurar este producto?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, restaurar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.productoService.recuperarProducto(id).subscribe(() => {
            this.cargarProductos('inactivos'); // Recargar productos después de restaurar
            Swal.fire('¡Restaurado!', 'El producto ha sido restaurado.', 'success');
          });
        }
      });
    }
  }

  editarProducto(producto: Producto): void {
    const dialogRef = this.dialog.open(EditarProductoComponent, {
      width: '100%', // Usa 100% para que se ajuste al contenedor
      maxWidth: '600px', // Ancho máximo
      disableClose: true, // Evita cerrar al hacer clic fuera del modal
      data: { producto: { ...producto } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoService.actualizarProducto(result.idProducto, result).subscribe(() => {
          this.cargarProductos('todos'); // Recargar productos después de editar
        });
      }
    });
  }

  abrirDialogoAgregarProducto(): void {
    const dialogRef = this.dialog.open(AddProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productoService.guardarProducto(result).subscribe(
          response => {
            console.log("Producto guardado:", response);
            this.cargarProductos('todos'); // Cargar nuevamente los productos
          },
          error => {
            console.error("Error al guardar producto:", error);
            if (error.error) {
              // Mostrar detalles del error en la consola
              console.error("Detalles del error:", error.error);
              Swal.fire('Error', 'No se pudo guardar el producto: ' + error.error.message, 'error');
            } else {
              Swal.fire('Error', 'Ocurrió un error inesperado.', 'error');
            }
          }
        );
      }
    });
  }
}