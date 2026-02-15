import React from 'react';

const AircraftDetails = ({ aircraft }) => {
  return (
    <div className="aircraft-details">
      <h2>Aircraft Details</h2>
      {aircraft ? (
        <div>
          <p><strong>Tail Number:</strong> {aircraft.tailNumber}</p>
          <p><strong>Type:</strong> {aircraft.type}</p>
        </div>
      ) : (
        <p>No aircraft data available</p>
      )}
    </div>
  );
};

export default AircraftDetails;
