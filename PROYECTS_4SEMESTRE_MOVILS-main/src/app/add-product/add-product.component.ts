import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      imagen: ['', Validators.required],
      codigoBarra: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(0.01)]], // Cambiado a null
      categoria: ['', Validators.required],
      stock: [null, [Validators.required, Validators.min(1)]], // Cambiado a null
      unidadMedida: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      fechaExpiracion: ['', Validators.required],
      estado: [true], // Por defecto está activo
    });
  }

  guardar(): void {
    if (this.form.valid) {
      const producto = {
        imagen: this.form.value.imagen,
        codigoBarra: this.form.value.codigoBarra,
        nombre: this.form.value.nombre,
        descripcion: this.form.value.descripcion,
        precio: this.form.value.precio,
        categoria: this.form.value.categoria,
        stock: this.form.value.stock,
        unidadMedida: this.form.value.unidadMedida,
        fechaIngreso: this.form.value.fechaIngreso,
        fechaExpiracion: this.form.value.fechaExpiracion,
        estado: this.form.value.estado ? 1 : 0 // Convertir a número
      };
      console.log(producto); // Para verificar los datos
      this.dialogRef.close(producto);
      this.form.reset(); // Limpiar el formulario después de guardar
    }
  }

  cancelar(): void {
    this.dialogRef.close(); // Solo cerrar el modal sin pasar datos
  }
}
