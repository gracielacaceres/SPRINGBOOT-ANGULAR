package pe.edu.vallegrande.barberia_macha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.vallegrande.barberia_macha.model.Cita;
import pe.edu.vallegrande.barberia_macha.model.Producto;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto,Long> {
    List<Producto> findByEstado(Integer estado);
}
