package com.university.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/flights")
public class FlightController {
    
    /*
     * Handles flightService GET
    */
    @GetMapping("/search")
    public ResponseEntity<String> search(@RequestParameter String flightNumber) {

        return ResponseEntity.ok("Implement /search. FlightNumber: " + flightNumber);
    }

    @GetMapping("/{flightId}")
    public ResponseEntity<String> getByFlightID(@PathVariable int flightID) {
        return ResponseEntity.ok("Implement /{flightId}");
    }

    @GetMapping("/{flightId}/details")
    public ResponseEntity<String> getDetails(@PathVariable int flightID) {
        return ResponseEntity.ok("Implement /{flightId}/details");
    }

    @GetMapping("/active")
    public ResponseEntity<String> getActive() {
        // return all active flights
        return ResponseEntity.ok("Implement /active. Return all active flights");
    }

    @GetMapping("/{flightId}/positions")
    public ResponseEntity<String> getPositions(@PathVariable int flightID) {
        return ResponseEntity.ok("Implement /{flightId}/positions");
    }

}

private enum Type {FLIGHT, AIRCRAFT, ENTITY}

private static class Flight {
	private int trackingID = 3;
	private Type type = Type.FLIGHT;
	private String flightNum;
	private boolean notif;
	private LocalDateTime time;
}