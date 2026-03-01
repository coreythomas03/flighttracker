package com.university.backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.http.ResponseEntity;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/tracking")
public class TrackingController {
    
    /*
	 * Handles trackingService POST 
	*/
	@PostMapping("")
	public ResponseEntity<String> getUserTracking(@RequestBody Celeb obj) {

		// simple checks to ensure expcted argument
		if (obj.getTrackingID() != 1)
			return ResponseEntity.badRequest().body("Only celebs allowed so far(trackingID==1)");

		System.out.println("Tracking ID: " + obj.getTrackingID() + "\n" + 
                            "Entity Type: " + obj.getEntityType() + "\n"  +  
                            "Name: " + obj.getName() + "\n" + 
                            "Time: " + obj.getTime()
        );

		return ResponseEntity.ok("Impl in progress. Compare output with arguments.");
	}

	/*
	 * Handles trackingService GET
	*/
	@GetMapping("/user/{userId}")
	public ResponseEntity<String> addTracking(@PathVariable int userId) {
		return ResponseEntity.ok("Implement GET service. Given userID: " + userId);
	}

	/*
	 * Handles trackingService DELETE
	*/
	@DeleteMapping("/{trackingId}")
	public ResponseEntity<String> removeTracking(@PathVariable int trackingId) {
		return ResponseEntity.ok("Implement DELETE service. Given trackingID: " + trackingId);
	}

}

// simplification of enums and classes/entities should be coord with frontend
//private enum ID {1, 2, 3, 4}
private enum EntityType {CELEBRITY, TEACHING_FACULTY}
private enum Type {FLIGHT, AIRCRAFT, ENTITY}

/*
// common object between entities to inherit from, refactor after 
private static class entity {}
*/

// Use as DTO
private static class Celeb {
	private int trackingID = 1;
	private EntityType type;
	private String entityName;
	private boolean notif;
	private LocalDateTime time;

	public int getTrackingID() {return trackingID;}
    public String getEntityType() {return type.toString();}
    public String getName() {return entityName;}
    public String getTime() {return time.toString();}
}

// Use as DTO
private static class Faculty {
	private int trackingID = 4;
	private Type type = Type.ENTITY;
	private String name;
	private EntityType entityType;
	private boolean notif;
	private LocalDateTime time;
}
