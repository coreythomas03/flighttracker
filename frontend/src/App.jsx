import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './styles/App.css';
import './styles/Common.css';

// Simple inline components for now
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

function SearchPage() {
  return (
    <div className="search-page">
      <h1>Search Flights</h1>
      <p>Search functionality coming soon...</p>
    </div>
  );
}

function TrackingPage() {
  return (
    <div className="tracking-page">
      <h1>My Tracking</h1>
      <p>Track your favorite flights, aircraft, and entities.</p>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="not-found-page" style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}

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