import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import FlightDetails from '../components/flight/FlightDetails';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import flightService from '../services/flightService';
import {
  getFlightById
} from './../utils/mockData';


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

      <FlightDetails flight={flight} />
    </div>
  );
}

export default FlightDetailsPage;
