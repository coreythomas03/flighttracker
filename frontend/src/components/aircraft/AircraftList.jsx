import React from 'react';

const AircraftList = ({ aircraft }) => {
  return (
    <div className="aircraft-list">
      <h2>Aircraft List</h2>
      {aircraft && aircraft.length > 0 ? (
        aircraft.map((item, index) => (
          <div key={index} className="aircraft-item">
            <p>{item.tailNumber}</p>
          </div>
        ))
      ) : (
        <p>No aircraft found</p>
      )}
    </div>
  );
};

export default AircraftList;
