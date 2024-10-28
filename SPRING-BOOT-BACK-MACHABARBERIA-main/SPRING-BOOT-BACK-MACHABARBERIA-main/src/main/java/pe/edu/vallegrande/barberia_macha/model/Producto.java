package pe.edu.vallegrande.barberia_macha.model;

import jakarta.persistence.*;

@Entity
@Table(name = "productos")
public class Producto {
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_seq")
        @SequenceGenerator(name = "producto_seq", sequenceName = "producto_seq", allocationSize = 1)
        @Column(name = "ID_PRODUCTO")
        private Long idProducto;

        @Column(name = "IMAGEN")
        private String imagen;

        @Column(name = "CODIGO_BARRA", unique = true)
        private String codigoBarra;

        @Column(name = "NOMBRE", nullable = false)
        private String nombre;

        @Column(name = "DESCRIPCION")
        private String descripcion;

        @Column(name = "PRECIO", nullable = false)
        private Double precio;

        @Column(name = "CATEGORIA")
        private String categoria;

        @Column(name = "STOCK")
        private Integer stock;

        @Column(name = "UNIDAD_MEDIDA")
        private String unidadMedida;

        @Column(name = "FECHA_INGRESO")
        private java.util.Date fechaIngreso;

        @Column(name = "FECHA_EXPIRACION")
        private java.util.Date fechaExpiracion;

        @Column(name = "ESTADO")
        private Integer estado;

        // Constructor sin argumentos
        public Producto() {}

        // Getters y Setters
        public Long getIdProducto() { return idProducto; }
        public void setIdProducto(Long idProducto) { this.idProducto = idProducto; }

        public String getImagen() { return imagen; }
        public void setImagen(String imagen) { this.imagen = imagen; }

        public String getCodigoBarra() { return codigoBarra; }
        public void setCodigoBarra(String codigoBarra) { this.codigoBarra = codigoBarra; }

        public String getNombre() { return nombre; }
        public void setNombre(String nombre) { this.nombre = nombre; }

        public String getDescripcion() { return descripcion; }
        public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

        public Double getPrecio() { return precio; }
        public void setPrecio(Double precio) { this.precio = precio; }

        public String getCategoria() { return categoria; }
        public void setCategoria(String categoria) { this.categoria = categoria; }

        public Integer getStock() { return stock; }
        public void setStock(Integer stock) { this.stock = stock; }

        public String getUnidadMedida() { return unidadMedida; }
        public void setUnidadMedida(String unidadMedida) { this.unidadMedida = unidadMedida; }

        public java.util.Date getFechaIngreso() { return fechaIngreso; }
        public void setFechaIngreso(java.util.Date fechaIngreso) { this.fechaIngreso = fechaIngreso; }

        public java.util.Date getFechaExpiracion() { return fechaExpiracion; }
        public void setFechaExpiracion(java.util.Date fechaExpiracion) { this.fechaExpiracion = fechaExpiracion; }

        public Integer getEstado() { return estado; }
        public void setEstado(Integer estado) { this.estado = estado; }
    }
