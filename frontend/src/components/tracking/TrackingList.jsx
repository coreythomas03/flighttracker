import React from 'react';

const TrackingList = ({ trackings }) => {
  return (
    <div className="tracking-list">
      <h2>Your Trackings</h2>
      {trackings && trackings.length > 0 ? (
        trackings.map((item, index) => (
          <div key={index} className="tracking-item">
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <p>No trackings yet</p>
      )}
    </div>
  );
};

export default TrackingList;
