package pe.edu.vallegrande.barberia_macha.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pe.edu.vallegrande.barberia_macha.model.Pago;
import pe.edu.vallegrande.barberia_macha.service.PagoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pagos")
public class PagoController {
    @Autowired
    private PagoService pagoService;

    @GetMapping
    public List<Pago> listarPagos() {
        return pagoService.listarPagos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pago> obtenerPago(@PathVariable Long id) {
        Optional<Pago> pago = pagoService.obtenerPagoPorId(id);
        return pago.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Pago> guardarPago(@RequestBody Pago pago) {
        try {
            Pago nuevoPago = pagoService.guardarPago(pago);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevoPago);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pago> actualizarPago(@PathVariable Long id, @RequestBody Pago pagoActualizado) {
        try {
            Pago pago = pagoService.actualizarPago(id, pagoActualizado);
            return ResponseEntity.ok(pago);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Método para eliminar lógicamente un pago
    @PutMapping("/eliminar/{id}")
    public ResponseEntity<Pago> eliminarPagoLogicamente(@PathVariable Long id) {
        try {
            Pago pago = pagoService.eliminarLogicamentePago(id);
            return ResponseEntity.ok(pago);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/reactivar")
    public ResponseEntity<Pago> reactivarPago(@PathVariable Long id) {
        try {
            Pago pagoReactivado = pagoService.reactivarPago(id);
            return ResponseEntity.ok(pagoReactivado);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
