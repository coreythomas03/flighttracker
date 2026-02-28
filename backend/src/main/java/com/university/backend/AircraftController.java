package.com.university.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/aircraft")
public class AircraftController {
    
    @GetMapping("")
    public ResponseEntity<String> getAllAircraft() {
        ResponseEntity.ok("Implement by returning all aircraft");
    }

    @GetMapping("/{aircraftId}")
    public ResponseEntity<String> getAircraftById(@PathVariable int aircraftID) {
        ResponseEntity.ok("Implement. Return the plane: " + aircraftID);
    }

    @GetMapping("/tail/{tailNumber}")
    public ResponseEntity<String> getAircraftByTailNumber(@PathVariable int tailNumber) {
        ResponseEntity.ok("Implement. Return plane with tail #" + tailNumber);
    }

}

// Use as DTO
private static class Aircraft {
	private int trackingID = 2;
	private Type type;
	private int aircraftID;
	private String tailNum;
	private boolean notif;
	private LocalDateTime time;
}
