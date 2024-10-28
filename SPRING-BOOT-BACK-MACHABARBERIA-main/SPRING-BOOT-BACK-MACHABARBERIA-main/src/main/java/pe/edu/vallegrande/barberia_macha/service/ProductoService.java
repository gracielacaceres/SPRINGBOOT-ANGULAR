package pe.edu.vallegrande.barberia_macha.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.vallegrande.barberia_macha.model.Producto; // Asegúrate de que este modelo esté definido
import pe.edu.vallegrande.barberia_macha.repository.ProductoRepository; // Asegúrate de que este repositorio esté definido
import java.util.List;
import java.util.Optional;
@Service
public class ProductoService {

        @Autowired
        private ProductoRepository productoRepository;

        public List<Producto> listarProductos() {
            return productoRepository.findAll();
        }

        public Optional<Producto> obtenerProductoPorId(Long id) {
            return productoRepository.findById(id);
        }

        public Producto guardarProducto(Producto producto) {
            return productoRepository.save(producto);
        }

        public Producto actualizarProducto(Long id, Producto productoActualizado) {
            return productoRepository.findById(id).map(producto -> {
                producto.setImagen(productoActualizado.getImagen());
                producto.setCodigoBarra(productoActualizado.getCodigoBarra());
                producto.setNombre(productoActualizado.getNombre());
                producto.setDescripcion(productoActualizado.getDescripcion());
                producto.setPrecio(productoActualizado.getPrecio());
                producto.setCategoria(productoActualizado.getCategoria());
                producto.setStock(productoActualizado.getStock());
                producto.setUnidadMedida(productoActualizado.getUnidadMedida());
                producto.setFechaIngreso(productoActualizado.getFechaIngreso());
                producto.setFechaExpiracion(productoActualizado.getFechaExpiracion());
                producto.setEstado(productoActualizado.getEstado());
                return productoRepository.save(producto);
            }).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        }

    public void eliminarProducto(Long id) {
        productoRepository.findById(id).ifPresent(producto -> {
            producto.setEstado(0);
            productoRepository.save(producto);
        });
    }

}


