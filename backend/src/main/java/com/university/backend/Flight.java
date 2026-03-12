package com.university.backend;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "flights")
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "external_flight_id", length = 64)
    private String externalFlightId;

    @Column(name = "tail_number", length = 16)
    private String tailNumber;

    @Column(length = 16)
    private String callsign;

    @Column(name = "airline_icao", length = 3)
    private String airlineIcao;

    @Column(name = "flight_number", length = 16)
    private String flightNumber;

    @Column(name = "aircraft_type", length = 16)
    private String aircraftType;

    @Column(name = "departure_airport_id")
    private Long departureAirportId;

    @Column(name = "arrival_airport_id")
    private Long arrivalAirportId;

    @Column(name = "scheduled_departure_utc")
    private LocalDateTime scheduledDepartureUtc;

    @Column(name = "scheduled_arrival_utc")
    private LocalDateTime scheduledArrivalUtc;

    @Column(name = "actual_departure_utc")
    private LocalDateTime actualDepartureUtc;

    @Column(name = "actual_arrival_utc")
    private LocalDateTime actualArrivalUtc;

    @Column(length = 32)
    private String status;

    @Column(name = "distance_km", precision = 8, scale = 2)
    private BigDecimal distanceKm;

    @Column(name = "duration_minutes")
    private Integer durationMinutes;

    @Column(length = 255)
    private String notes;

    @Column(name = "live_updated_utc")
    private LocalDateTime liveUpdatedUtc;

    @Column(name = "live_latitude", precision = 9, scale = 6)
    private BigDecimal liveLatitude;

    @Column(name = "live_longitude", precision = 9, scale = 6)
    private BigDecimal liveLongitude;

    @Column(name = "live_altitude_ft")
    private Integer liveAltitudeFt;

    @Column(name = "live_ground_speed_kt", precision = 8, scale = 1)
    private BigDecimal liveGroundSpeedKt;

    @Column(name = "live_heading_deg", precision = 6, scale = 2)
    private BigDecimal liveHeadingDeg;

    @Column(name = "last_seen_utc")
    private LocalDateTime lastSeenUtc;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExternalFlightId() {
        return externalFlightId;
    }

    public void setExternalFlightId(String externalFlightId) {
        this.externalFlightId = externalFlightId;
    }

    public String getTailNumber() {
        return tailNumber;
    }

    public void setTailNumber(String tailNumber) {
        this.tailNumber = tailNumber;
    }

    public String getCallsign() {
        return callsign;
    }

    public void setCallsign(String callsign) {
        this.callsign = callsign;
    }

    public String getAirlineIcao() {
        return airlineIcao;
    }

    public void setAirlineIcao(String airlineIcao) {
        this.airlineIcao = airlineIcao;
    }

    public String getFlightNumber() {
        return flightNumber;
    }

    public void setFlightNumber(String flightNumber) {
        this.flightNumber = flightNumber;
    }

    public String getAircraftType() {
        return aircraftType;
    }

    public void setAircraftType(String aircraftType) {
        this.aircraftType = aircraftType;
    }

    public Long getDepartureAirportId() {
        return departureAirportId;
    }

    public void setDepartureAirportId(Long departureAirportId) {
        this.departureAirportId = departureAirportId;
    }

    public Long getArrivalAirportId() {
        return arrivalAirportId;
    }

    public void setArrivalAirportId(Long arrivalAirportId) {
        this.arrivalAirportId = arrivalAirportId;
    }

    public LocalDateTime getScheduledDepartureUtc() {
        return scheduledDepartureUtc;
    }

    public void setScheduledDepartureUtc(LocalDateTime scheduledDepartureUtc) {
        this.scheduledDepartureUtc = scheduledDepartureUtc;
    }

    public LocalDateTime getScheduledArrivalUtc() {
        return scheduledArrivalUtc;
    }

    public void setScheduledArrivalUtc(LocalDateTime scheduledArrivalUtc) {
        this.scheduledArrivalUtc = scheduledArrivalUtc;
    }

    public LocalDateTime getActualDepartureUtc() {
        return actualDepartureUtc;
    }

    public void setActualDepartureUtc(LocalDateTime actualDepartureUtc) {
        this.actualDepartureUtc = actualDepartureUtc;
    }

    public LocalDateTime getActualArrivalUtc() {
        return actualArrivalUtc;
    }

    public void setActualArrivalUtc(LocalDateTime actualArrivalUtc) {
        this.actualArrivalUtc = actualArrivalUtc;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public BigDecimal getDistanceKm() {
        return distanceKm;
    }

    public void setDistanceKm(BigDecimal distanceKm) {
        this.distanceKm = distanceKm;
    }

    public Integer getDurationMinutes() {
        return durationMinutes;
    }

    public void setDurationMinutes(Integer durationMinutes) {
        this.durationMinutes = durationMinutes;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDateTime getLiveUpdatedUtc() {
        return liveUpdatedUtc;
    }

    public void setLiveUpdatedUtc(LocalDateTime liveUpdatedUtc) {
        this.liveUpdatedUtc = liveUpdatedUtc;
    }

    public BigDecimal getLiveLatitude() {
        return liveLatitude;
    }

    public void setLiveLatitude(BigDecimal liveLatitude) {
        this.liveLatitude = liveLatitude;
    }

    public BigDecimal getLiveLongitude() {
        return liveLongitude;
    }

    public void setLiveLongitude(BigDecimal liveLongitude) {
        this.liveLongitude = liveLongitude;
    }

    public Integer getLiveAltitudeFt() {
        return liveAltitudeFt;
    }

    public void setLiveAltitudeFt(Integer liveAltitudeFt) {
        this.liveAltitudeFt = liveAltitudeFt;
    }

    public BigDecimal getLiveGroundSpeedKt() {
        return liveGroundSpeedKt;
    }

    public void setLiveGroundSpeedKt(BigDecimal liveGroundSpeedKt) {
        this.liveGroundSpeedKt = liveGroundSpeedKt;
    }

    public BigDecimal getLiveHeadingDeg() {
        return liveHeadingDeg;
    }

    public void setLiveHeadingDeg(BigDecimal liveHeadingDeg) {
        this.liveHeadingDeg = liveHeadingDeg;
    }

    public LocalDateTime getLastSeenUtc() {
        return lastSeenUtc;
    }

    public void setLastSeenUtc(LocalDateTime lastSeenUtc) {
        this.lastSeenUtc = lastSeenUtc;
    }
}
