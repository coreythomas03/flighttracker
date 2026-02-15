import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import {
  mockFlights,
  mockUserTrackings,
  searchFlights,
  getFlightById,
  getActiveFlights
} from './utils/mockData';
import { formatDateTime, formatTime, formatAltitude, formatSpeed } from './utils/formatters';
import { STATUS_COLORS } from './utils/constants';
import './styles/App.css';
import './styles/Common.css';
import './styles/Flight.css';

// Before (Mock):
//const results = searchFlights(query);
// After (Real API):
//const results = await flightService.searchByFlightNumber(query);

// ============================================================================
// COMMON COMPONENTS
// ============================================================================

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>✈️ Flight Tracker</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/search" className="nav-link">Search</Link>
          <Link to="/tracking" className="nav-link">Tracking</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2026 Flight Tracker - P_07 Big Old Jet Airliner</p>
        <p>Academic Project - Software Engineering Course</p>
      </div>
    </footer>
  );
}

function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-message">{message}</p>
    </div>
  );
}

// ============================================================================
// FLIGHT COMPONENTS
// ============================================================================

function FlightStatusBadge({ status }) {
  const color = STATUS_COLORS[status] || '#95a5a6';
  return (
    <span
      className="flight-status-badge"
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '4px 12px',
        borderRadius: '4px',
        fontWeight: '600',
        fontSize: '12px',
        textTransform: 'uppercase'
      }}
    >
      {status}
    </span>
  );
}

function FlightCard({ flight }) {
  const navigate = useNavigate();

  return (
    <div className="flight-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
        <h3 style={{ margin: 0 }}>{flight.flightNumber}</h3>
        <FlightStatusBadge status={flight.status} />
      </div>

      <div className="flight-info">
        <p><strong>Aircraft:</strong> {flight.tailNumber} ({flight.aircraftType})</p>
        <p><strong>Route:</strong> {flight.origin} → {flight.destination}</p>
        <p><strong>Departure:</strong> {formatTime(flight.departureTime)}</p>
        <p><strong>Arrival:</strong> {flight.arrivalTime ? formatTime(flight.arrivalTime) : formatTime(flight.estimatedArrivalTime)} (EST)</p>
        {flight.entityName && (
          <p><strong>Owner:</strong> {flight.entityName} ({flight.entityType})</p>
        )}
        {flight.currentPosition && (
          <p><strong>Current:</strong> {formatAltitude(flight.currentPosition.altitude)}, {formatSpeed(flight.currentPosition.groundSpeed)}</p>
        )}
      </div>

      <button
        className="btn btn-secondary"
        onClick={() => navigate(`/flight/${flight.flightId}`)}
        style={{ marginTop: '12px' }}
      >
        View Details
      </button>
    </div>
  );
}

function FlightSearch({ onSearch, initialValue = '' }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="flight-search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by flight number, tail number, entity, or airport..."
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

// ============================================================================
// PAGES
// ============================================================================

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

function FlightDetailsPage() {
  const { flightId } = useParams();
  const [flight] = useState(getFlightById(flightId));
  const navigate = useNavigate();

  if (!flight) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>Flight not found</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '24px' }}>
          The flight you're looking for doesn't exist.
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/search')}>
          Back to Search
        </button>
      </div>
    );
  }

  return (
    <div className="flight-details-page">
      <button
        onClick={() => navigate('/search')}
        style={{
          marginBottom: '20px',
          background: 'none',
          border: 'none',
          color: '#3498db',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        ← Back to Search
      </button>

      <div className="flight-details">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h1 style={{ margin: 0 }}>Flight {flight.flightNumber}</h1>
          <FlightStatusBadge status={flight.status} />
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <strong>Aircraft</strong>
            <span>{flight.tailNumber}</span>
          </div>
          <div className="detail-item">
            <strong>Aircraft Type</strong>
            <span>{flight.aircraftType}</span>
          </div>
          <div className="detail-item">
            <strong>Origin</strong>
            <span>{flight.origin} - {flight.originName}</span>
          </div>
          <div className="detail-item">
            <strong>Destination</strong>
            <span>{flight.destination} - {flight.destinationName}</span>
          </div>
          <div className="detail-item">
            <strong>Departure Time</strong>
            <span>{formatDateTime(flight.departureTime)}</span>
          </div>
          <div className="detail-item">
            <strong>Arrival Time</strong>
            <span>
              {flight.arrivalTime
                ? formatDateTime(flight.arrivalTime)
                : `${formatDateTime(flight.estimatedArrivalTime)} (EST)`
              }
            </span>
          </div>
          {flight.entityName && (
            <>
              <div className="detail-item">
                <strong>Owner/Operator</strong>
                <span>{flight.entityName}</span>
              </div>
              <div className="detail-item">
                <strong>Entity Type</strong>
                <span>{flight.entityType}</span>
              </div>
            </>
          )}
        </div>

        {flight.currentPosition && (
          <div style={{ marginTop: '32px', background: '#f8f9fa', padding: '24px', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>Current Position</h2>
            <div className="details-grid">
              <div className="detail-item">
                <strong>Latitude</strong>
                <span>{flight.currentPosition.latitude.toFixed(4)}°</span>
              </div>
              <div className="detail-item">
                <strong>Longitude</strong>
                <span>{flight.currentPosition.longitude.toFixed(4)}°</span>
              </div>
              <div className="detail-item">
                <strong>Altitude</strong>
                <span>{formatAltitude(flight.currentPosition.altitude)}</span>
              </div>
              <div className="detail-item">
                <strong>Ground Speed</strong>
                <span>{formatSpeed(flight.currentPosition.groundSpeed)}</span>
              </div>
              <div className="detail-item">
                <strong>Heading</strong>
                <span>{flight.currentPosition.heading}°</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TrackingPage() {
  const [trackings, setTrackings] = useState(mockUserTrackings);
  const [newTracking, setNewTracking] = useState('');

  const handleAddTracking = (e) => {
    e.preventDefault();
    if (!newTracking.trim()) return;

    const newItem = {
      trackingId: trackings.length + 1,
      type: 'flight',
      flightNumber: newTracking.toUpperCase(),
      notificationEnabled: false,
      createdAt: new Date().toISOString()
    };

    setTrackings([...trackings, newItem]);
    setNewTracking('');
  };

  const handleRemoveTracking = (trackingId) => {
    setTrackings(trackings.filter(t => t.trackingId !== trackingId));
  };

  return (
    <div className="tracking-page">
      <h1>My Tracking</h1>
      <p style={{ color: '#7f8c8d', marginBottom: '32px' }}>
        Keep track of your favorite flights, aircraft, and entities
      </p>

      {/* Add Tracking Form */}
      <div style={{ background: 'white', padding: '24px', borderRadius: '8px', marginBottom: '24px' }}>
        <h3 style={{ marginTop: 0 }}>Add New Tracking</h3>
        <form onSubmit={handleAddTracking} style={{ display: 'flex', gap: '12px' }}>
          <input
            type="text"
            placeholder="Enter flight number, tail number, or entity name..."
            value={newTracking}
            onChange={(e) => setNewTracking(e.target.value)}
            className="search-input"
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn btn-primary">
            Add Tracking
          </button>
        </form>
      </div>

      {/* Tracking List */}
      <div className="tracking-list" style={{ background: 'white', padding: '24px', borderRadius: '8px' }}>
        <h2 style={{ marginTop: 0 }}>Your Tracked Items ({trackings.length})</h2>

        {trackings.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {trackings.map(tracking => (
              <div
                key={tracking.trackingId}
                style={{
                  padding: '16px',
                  background: '#f8f9fa',
                  borderRadius: '6px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>
                    {tracking.type === 'entity' && `${tracking.entityName} (${tracking.entityType})`}
                    {tracking.type === 'aircraft' && `${tracking.tailNumber} - ${tracking.aircraftType}`}
                    {tracking.type === 'flight' && `Flight ${tracking.flightNumber}`}
                  </div>
                  <div style={{ fontSize: '14px', color: '#7f8c8d' }}>
                    Added: {formatDateTime(tracking.createdAt)}
                  </div>
                  <div style={{ fontSize: '14px', marginTop: '4px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={tracking.notificationEnabled}
                        onChange={() => {
                          setTrackings(trackings.map(t =>
                            t.trackingId === tracking.trackingId
                              ? { ...t, notificationEnabled: !t.notificationEnabled }
                              : t
                          ));
                        }}
                      />
                      Enable notifications
                    </label>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveTracking(tracking.trackingId)}
                  style={{
                    background: '#e74c3c',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 20px', color: '#7f8c8d' }}>
            <p style={{ fontSize: '48px', margin: '0 0 16px 0' }}>📋</p>
            <p>No tracked items yet. Add one above to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="not-found-page" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ color: '#7f8c8d', marginBottom: '24px' }}>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}

// ============================================================================
// MAIN APP
// ============================================================================

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/flight/:flightId" element={<FlightDetailsPage />} />
              <Route path="/tracking" element={<TrackingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;