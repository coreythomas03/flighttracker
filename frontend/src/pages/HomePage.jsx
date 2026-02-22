import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlightCard,} from './../components/flight';// FLIGHT COMPONENTS
import {
  getActiveFlights
} from './../utils/mockData';

function HomePage() {
  const [activeFlights] = useState(getActiveFlights());

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Big Old Jet Airliner</h1>
        <p className="subtitle">Track flights in real-time across the globe</p>
        <div className="cta-buttons">
          <Link to="/search" className="btn btn-primary">
            Search Flights
          </Link>
          <Link to="/tracking" className="btn btn-secondary">
            My Tracking
          </Link>
        </div>
      </div>

      <div className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🔍 Flight Search</h3>
            <p>Search for any flight by number, aircraft, or entity</p>
          </div>
          <div className="feature-card">
            <h3>📍 Real-time Tracking</h3>
            <p>Get live updates on flight positions and status</p>
          </div>
          <div className="feature-card">
            <h3>✈️ Aircraft Database</h3>
            <p>Track specific aircraft and their flight history</p>
          </div>
          <div className="feature-card">
            <h3>⭐ Celebrity Tracking</h3>
            <p>Follow flights of celebrities and public figures</p>
          </div>
        </div>
      </div>

      {/* Active Flights Section */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px' }}>Active Flights</h2>
        {activeFlights.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {activeFlights.map(flight => (
              <FlightCard key={flight.flightId} flight={flight} />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No active flights at the moment</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
