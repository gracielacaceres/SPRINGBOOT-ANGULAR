export class Cita {
  constructor(
    public fecha: string,
    public hora: string,
    public nota: string,
    public estado: string,
    public cliente: { idUsuario: number }, // Asegúrate de que sea un objeto
    public barbero: { idUsuario: number }   // Asegúrate de que sea un objeto
  ) {}
}
