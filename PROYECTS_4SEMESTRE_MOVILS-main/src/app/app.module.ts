import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de que esté importado
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker'; // Importa el módulo del datepicker
import { MatNativeDateModule } from '@angular/material/core'; // Importa el módulo nativo para el datepicker
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ProductosComponent } from './productos/productos.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    EditarUsuarioComponent,
    AddUserComponent,
    DashboardComponent,
    LoginComponent,
    UserDashboardComponent,
    CrearCitaComponent,
    AccessDeniedComponent,
    ProductosComponent,
    AddProductComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatSelectModule,
    MatDatepickerModule, // Agregado aquí
    MatNativeDateModule, // Agregado aquí
    RouterModule.forRoot([]), // Asegúrate de que tus rutas están configuradas
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
