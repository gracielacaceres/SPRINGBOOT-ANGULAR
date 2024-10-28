import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CrearCitaComponent } from './crear-cita/crear-cita.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ProductosComponent } from './productos/productos.component'; // Importa el componente de productos

const routes: Routes = [
  { path: 'crear-cita', component: CrearCitaComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'productos', component: ProductosComponent }, // Agrega la ruta para productos
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
