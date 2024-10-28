package pe.edu.vallegrande.barberia_macha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pe.edu.vallegrande.barberia_macha.model.Cita;

import java.util.List;

public interface CitaRepository extends JpaRepository<Cita,Long> {
    List<Cita> findByEstado(String estado);
}
