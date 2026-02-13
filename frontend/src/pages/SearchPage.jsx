import React, { useState } from 'react';
import FlightSearch from '../components/flight/FlightSearch';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import flightService from '../services/flightService';
import '../styles/Flight.css';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    
    try {
      const results = await flightService.searchByFlightNumber(searchTerm);
      setSearchResults(Array.isArray(results) ? results : [results]);
    } catch (err) {
      setError(err.message || 'Failed to search flights');
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <h1>Search Flights</h1>
      <FlightSearch onSearch={handleSearch} />
      
      {loading && <LoadingSpinner message="Searching flights..." />}
      {error && <ErrorMessage message={error} onRetry={() => handleSearch('')} />}
      
      {!loading && !error && searchResults.length > 0 && (
        <div className="search-results">
          <h2>Results ({searchResults.length})</h2>
          {searchResults.map((flight, index) => (
            <div key={index} className="flight-card">
              <h3>{flight.flightNumber || 'N/A'}</h3>
              <p>Status: {flight.status || 'Unknown'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
