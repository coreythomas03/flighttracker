import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
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
    </div>
  );
}

export default HomePage;
