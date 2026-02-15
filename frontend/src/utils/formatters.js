export const formatDateTime = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Format time only
export const formatTime = (dateString) => {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Format flight status
export const formatFlightStatus = (status) => {
  if (!status) return 'Unknown';
  return status.charAt(0) + status.slice(1).toLowerCase();
};

// Format altitude
export const formatAltitude = (altitude) => {
  if (!altitude && altitude !== 0) return 'N/A';
  return `${altitude.toLocaleString()} ft`;
};

// Format speed
export const formatSpeed = (speed) => {
  if (!speed && speed !== 0) return 'N/A';
  return `${speed} knots`;
};

// Format coordinates
export const formatCoordinates = (lat, lon) => {
  if (!lat || !lon) return 'N/A';
  return `${lat.toFixed(4)}°, ${lon.toFixed(4)}°`;
};

// Format tail number
export const formatTailNumber = (tailNumber) => {
  if (!tailNumber) return 'N/A';
  return tailNumber.toUpperCase();
};