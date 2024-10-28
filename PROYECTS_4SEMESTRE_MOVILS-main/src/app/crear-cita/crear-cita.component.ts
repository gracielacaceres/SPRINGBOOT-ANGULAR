import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrl: './crear-cita.component.css'
})
export class CrearCitaComponent implements OnInit{
  fecha: string = '';
  hora: string = '';
  nota: string = '';
  estado: string = 'pendiente'; // Estado inicial de la cita
  idCliente?: number; // Esto lo obtendrás del usuario logueado
  barberos: Usuario[] = []; // Lista de barberos
  idBarbero?: number; // ID del barbero seleccionado
  errorMessage: string = '';

  constructor(private usuarioService: UsuarioService, private http: HttpClient, private router: Router) {}

  // ngOnInit(): void {
  //   // Obtener el idCliente desde el localStorage
  //   const idClienteFromStorage = localStorage.getItem('userId');
  //   if (idClienteFromStorage) {
  //     this.idCliente = +idClienteFromStorage; // Convertir a número
  //   }

  //   // Cargar la lista de barberos
  //   this.usuarioService.listarBarberos().subscribe({
  //     next: (barberos: Usuario[]) => {
  //       this.barberos = barberos;
  //     },
  //     error: err => {
  //       this.errorMessage = 'Error al cargar los barberos';
  //       console.error(err);
  //     }
  //   });
  // }

  ngOnInit(): void {
    // Obtener el rol del usuario logueado desde localStorage
    const userRole = localStorage.getItem('userRole');

    // Verificar si el usuario tiene el rol 'cliente'
    if (userRole !== 'cliente') {
      // Si no es cliente, redirigir a la página de acceso denegado
      this.router.navigate(['/access-denied']);
      return;
    }

    // Obtener el idCliente desde el localStorage
    const idClienteFromStorage = localStorage.getItem('userId');
    if (idClienteFromStorage) {
      this.idCliente = +idClienteFromStorage; // Convertir a número
    }

    // Cargar la lista de barberos
    this.usuarioService.listarBarberos().subscribe({
      next: (barberos: Usuario[]) => {
        this.barberos = barberos;
      },
      error: err => {
        this.errorMessage = 'Error al cargar los barberos';
        console.error(err);
      }
    });
  }

  crearCita() {
    const nuevaCita = {
      fecha: this.fecha,
      hora: this.hora,
      nota: this.nota,
      estado: this.estado,
      cliente: {
        idUsuario: this.idCliente
      },
      barbero: {
        idUsuario: this.idBarbero
      }
    };

    this.http.post('http://localhost:8080/citas', nuevaCita).subscribe({
      next: () => {
        console.log('Cita creada exitosamente');
        this.router.navigate(['/user-dashboard']); // Redirigir después de crear la cita
      },
      error: err => {
        this.errorMessage = 'Error al crear la cita';
        console.error('Detalles del error:', err);
      }
    });
  }


}
