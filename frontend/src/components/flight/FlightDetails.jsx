import React from 'react';
import '../../styles/Flight.css';

function FlightDetails({ flight }) {
  if (!flight) {
    return <div>No flight data available</div>;
  }

  return (
    <div className="flight-details">
      <h2>Flight Details</h2>
      <div className="details-grid">
        <div className="detail-item">
          <strong>Flight Number:</strong>
          <span>{flight.flightNumber || 'N/A'}</span>
        </div>
        <div className="detail-item">
          <strong>Status:</strong>
          <span>{flight.status || 'Unknown'}</span>
        </div>
        <div className="detail-item">
          <strong>Origin:</strong>
          <span>{flight.origin || 'N/A'}</span>
        </div>
        <div className="detail-item">
          <strong>Destination:</strong>
          <span>{flight.destination || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
}

export default FlightDetails;
