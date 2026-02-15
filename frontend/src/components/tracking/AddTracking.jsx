import React, { useState } from 'react';

const AddTracking = ({ onAdd }) => {
  const [trackingName, setTrackingName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingName.trim() && onAdd) {
      onAdd(trackingName);
      setTrackingName('');
    }
  };

  return (
    <div className="add-tracking">
      <h3>Add Tracking</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter flight, aircraft, or entity name"
          value={trackingName}
          onChange={(e) => setTrackingName(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default AddTracking;
