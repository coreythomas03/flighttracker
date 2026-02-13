import React, { useState } from 'react';
import '../../styles/Flight.css';

function FlightSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <div className="flight-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter flight number, tail number, or entity name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default FlightSearch;
