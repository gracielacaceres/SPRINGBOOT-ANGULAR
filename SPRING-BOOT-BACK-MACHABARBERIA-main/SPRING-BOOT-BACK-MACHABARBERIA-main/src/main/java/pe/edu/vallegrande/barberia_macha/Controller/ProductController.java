package pe.edu.vallegrande.barberia_macha.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation .*;
import pe.edu.vallegrande.barberia_macha.model.Producto; // Asegúrate de que este modelo esté definido
import pe.edu.vallegrande.barberia_macha.service.ProductoService; // Asegúrate de que este servicio esté definido
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/productos")
public class ProductController {

        @Autowired
        private ProductoService productoService;

        @GetMapping
        public List<Producto> listarProductos() {
            return productoService.listarProductos();
        }

        @GetMapping("/{id}")
        public ResponseEntity<Producto> obtenerProducto(@PathVariable Long id) {
            Optional<Producto> producto = productoService.obtenerProductoPorId(id);
            return producto.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
        }

        @PostMapping
        public ResponseEntity<Producto> guardarProducto(@RequestBody Producto producto) {
            if (producto.getEstado() == null) {
                producto.setEstado(1); // Asigna como activo si no se especifica
            }
            try {
                Producto nuevoProducto = productoService.guardarProducto(producto);
                return ResponseEntity.status(HttpStatus.CREATED).body(nuevoProducto);
            } catch (Exception e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
        }

        @PutMapping("/{id}")
        public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto productoActualizado) {
            try {
                Producto producto = productoService.actualizarProducto(id, productoActualizado);
                return ResponseEntity.ok(producto);
            } catch (RuntimeException e) {
                return ResponseEntity.notFound().build();
            }
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> eliminarProducto(@PathVariable Long id) {
            productoService.eliminarProducto(id);
            return ResponseEntity.noContent().build();
        }
    }

