import { useState, useEffect } from 'react';
import flightService from '../services/flightService';

const useFlight = (flightId) => {
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!flightId) return;

    const fetchFlight = async () => {
      try {
        setLoading(true);
        const data = await flightService.getFlightById(flightId);
        setFlight(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch flight');
      } finally {
        setLoading(false);
      }
    };

    fetchFlight();
  }, [flightId]);

  return { flight, loading, error };
};

export default useFlight;
