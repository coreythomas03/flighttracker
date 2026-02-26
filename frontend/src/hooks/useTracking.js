import { useState, useEffect } from 'react';
import trackingService from '../services/trackingService';

const useTracking = (userId) => {
  const [trackings, setTrackings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchTrackings = async () => {
      try {
        setLoading(true);
        const data = await trackingService.getUserTrackings(userId);
        setTrackings(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch trackings');
      } finally {
        setLoading(false);
      }
    };

    fetchTrackings();
  }, [userId]);

  return { trackings, loading, error };
};

export default useTracking;
