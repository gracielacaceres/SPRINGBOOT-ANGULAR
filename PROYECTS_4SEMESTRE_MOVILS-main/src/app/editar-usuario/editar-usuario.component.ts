import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { usuario: Usuario },
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      tipoDeDocumento: [data.usuario.tipoDeDocumento, Validators.required],
      numeroDeDocumento: [data.usuario.numeroDeDocumento, Validators.required],
      nombre: [data.usuario.nombre, Validators.required],
      apellido: [data.usuario.apellido, Validators.required],
      celular: [data.usuario.celular, Validators.required],
      email: [data.usuario.email, [Validators.required, Validators.email]],
      rol: [data.usuario.rol, Validators.required],
      activo: [data.usuario.activo]
    });
  }

  guardar(): void {
    if (this.form.valid) {
      const usuarioEditado = { ...this.data.usuario, ...this.form.value };
      this.dialogRef.close(usuarioEditado);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
