import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../producto'; // Asegúrate de tener el modelo de Producto

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { producto: Producto },
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      imagen: [data.producto.imagen, Validators.required],
      codigoBarra: [data.producto.codigoBarra, Validators.required],
      nombre: [data.producto.nombre, Validators.required],
      descripcion: [data.producto.descripcion, Validators.required],
      precio: [data.producto.precio, [Validators.required, Validators.min(0.01)]],
      categoria: [data.producto.categoria, Validators.required],
      stock: [data.producto.stock, [Validators.required, Validators.min(1)]],
      unidadMedida: [data.producto.unidadMedida, Validators.required],
      fechaIngreso: [data.producto.fechaIngreso, Validators.required],
      fechaExpiracion: [data.producto.fechaExpiracion, Validators.required],
      estado: [data.producto.estado ? 1 : 0] // Convertir a número
    });
  }

  guardar(): void {
    if (this.form.valid) {
      const productoEditado = { ...this.data.producto, ...this.form.value };
      this.dialogRef.close(productoEditado); // Cerrar el dialogo y pasar el producto editado
    }
  }

  cancelar(): void {
    this.dialogRef.close(); // Cerrar el dialogo sin pasar datos
  }
}
