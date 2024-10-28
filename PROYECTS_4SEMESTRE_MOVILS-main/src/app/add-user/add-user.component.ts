import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      tipoDeDocumento: ['', Validators.required],
      numeroDeDocumento: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^9\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required], // Añadir el campo de password
      rol: ['cliente'], // Valor por defecto
      activo: [true],
    });
  }

  guardar(): void {
    if (this.form.valid) {
        const usuario = {
            tipoDeDocumento: this.form.value.tipoDeDocumento,
            numeroDeDocumento: this.form.value.numeroDeDocumento,
            nombre: this.form.value.nombre,
            apellido: this.form.value.apellido,
            celular: this.form.value.celular,
            email: this.form.value.email,
            password: this.form.value.password,
            rol: this.form.value.rol,
            activo: this.form.value.activo ? 1 : 0 // Convertir a número
        };
        console.log(usuario); // Para verificar los datos
        this.dialogRef.close(usuario);
    }
  }

  cancelar(): void {
    this.dialogRef.close(); // Solo cerrar el modal sin pasar datos
  }
}
