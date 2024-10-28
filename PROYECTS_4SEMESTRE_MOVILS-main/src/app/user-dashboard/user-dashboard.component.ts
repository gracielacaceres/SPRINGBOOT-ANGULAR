import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.verificarRolCliente();
  }

  // Método para verificar que el usuario tenga el rol de 'cliente'
  verificarRolCliente() {
    const userRole = localStorage.getItem('userRole');

    if (userRole !== 'cliente') {
      // Si el rol no es cliente, redirigir a la página de inicio de sesión o error
      alert('No tienes acceso a esta página');
      this.router.navigate(['/login']); // o cualquier otra ruta que prefieras
    }
  }

  // Método para redirigir a la página de creación de citas
  irACrearCita() {
    this.router.navigate(['/crear-cita']);
  }

  logout() {
    // Eliminar los datos almacenados en el localStorage
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');

    // Redirigir al usuario a la página de inicio de sesión
    this.router.navigate(['/login']);
  }


}
