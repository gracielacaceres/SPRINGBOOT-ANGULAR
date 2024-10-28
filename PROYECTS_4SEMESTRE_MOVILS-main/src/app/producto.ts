export class Producto {
  idProducto?: number;       // ID del producto (opcional)
  imagen?: string;           // URL de la imagen del producto (opcional)
  codigoBarra?: string;      // Código de barra del producto (opcional)
  nombre?: string;           // Nombre del producto (opcional)
  descripcion?: string;      // Descripción del producto (opcional)
  precio?: number;           // Precio del producto (opcional)
  categoria?: string;        // Categoría del producto (opcional)
  stock?: number;            // Cantidad en stock (opcional)
  unidadMedida?: string;     // Unidad de medida del producto (opcional)
  fechaIngreso?: Date;       // Fecha de ingreso del producto (opcional)
  fechaExpiracion?: Date;    // Fecha de expiración del producto (opcional)
  estado?: number; 
}
