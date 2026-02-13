import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FlightDetails from '../components/flight/FlightDetails';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import flightService from '../services/flightService';

function FlightDetailsPage() {
  const { flightId } = useParams();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlight = async () => {
      try {
        const data = await flightService.getFlightById(flightId);
        setFlight(data);
      } catch (err) {
        setError(err.message || 'Failed to load flight details');
      } finally {
        setLoading(false);
      }
    };

    fetchFlight();
  }, [flightId]);

  if (loading) return <LoadingSpinner message="Loading flight details..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="flight-details-page">
      <FlightDetails flight={flight} />
    </div>
  );
}

export default FlightDetailsPage;
