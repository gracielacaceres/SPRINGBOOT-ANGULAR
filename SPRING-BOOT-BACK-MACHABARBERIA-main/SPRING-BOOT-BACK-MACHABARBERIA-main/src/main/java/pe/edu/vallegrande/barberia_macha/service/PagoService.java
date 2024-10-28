package pe.edu.vallegrande.barberia_macha.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.edu.vallegrande.barberia_macha.model.Pago;
import pe.edu.vallegrande.barberia_macha.repository.PagoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PagoService {
    @Autowired
    private PagoRepository pagoRepository;

    public List<Pago> listarPagos() {
        return pagoRepository.findAll();
    }

    public Optional<Pago> obtenerPagoPorId(Long id) {
        return pagoRepository.findById(id);
    }

    public Pago guardarPago(Pago pago) {
        return pagoRepository.save(pago);
    }

    public Pago actualizarPago(Long id, Pago pagoActualizado) {
        return pagoRepository.findById(id).map(pago -> {
            pago.setCita(pagoActualizado.getCita());
            pago.setCorteRealizado(pagoActualizado.getCorteRealizado());
            pago.setMonto(pagoActualizado.getMonto());
            pago.setFechaPago(pagoActualizado.getFechaPago());
            pago.setHoraPago(pagoActualizado.getHoraPago());
            pago.setStatus(pagoActualizado.getStatus());
            return pagoRepository.save(pago);
        }).orElseThrow(() -> new RuntimeException("Pago no encontrado"));
    }

    // Método para eliminar lógicamente un pago
    public Pago eliminarLogicamentePago(Long idPago) {
        return pagoRepository.findById(idPago).map(pago -> {
            pago.setStatus(0);  // Cambiar el estado a 0 para eliminación lógica
            return pagoRepository.save(pago);
        }).orElseThrow(() -> new RuntimeException("Pago no encontrado"));
    }

    // Método para reactivar un pago
    public Pago reactivarPago(Long idPago) {
        return pagoRepository.findById(idPago).map(pago -> {
            // Cambia el status a 1
            pago.setStatus(1);
            return pagoRepository.save(pago); // Guarda los cambios
        }).orElseThrow(() -> new RuntimeException("Pago no encontrado"));
    }



}
