import React, { useState } from 'react';
import FlightSearch from '../components/flight/FlightSearch';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import flightService from '../services/flightService';
import '../styles/Flight.css';
import { FlightCard,} from './../components/flight';// FLIGHT COMPONENTS
import {
  mockFlights,
  searchFlights
} from './../utils/mockData';

// Before (Mock):
//const results = searchFlights(query);
// After (Real API):
//const results = await flightService.searchByFlightNumber(query);

function SearchPage() {
  const [searchResults, setSearchResults] = useState(mockFlights);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (query) => {
    setSearchTerm(query);
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const results = searchFlights(query);
      setSearchResults(results);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="search-page">
      <h1>Search Flights</h1>
      <FlightSearch onSearch={handleSearch} initialValue={searchTerm} />

      {loading ? (
        <LoadingSpinner message="Searching flights..." />
      ) : (
        <>
          <div style={{ marginTop: '24px', marginBottom: '16px' }}>
            <p style={{ color: '#7f8c8d' }}>
              {searchResults.length} flight{searchResults.length !== 1 ? 's' : ''} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {searchResults.length > 0 ? (
            <div className="search-results">
              {searchResults.map(flight => (
                <FlightCard key={flight.flightId} flight={flight} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', background: 'white', borderRadius: '8px' }}>
              <p style={{ fontSize: '48px', margin: '0 0 16px 0' }}>🔍</p>
              <h3>No flights found</h3>
              <p style={{ color: '#7f8c8d' }}>Try searching for a different flight number or airport</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SearchPage;
