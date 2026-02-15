// Validate flight number format
export const isValidFlightNumber = (flightNumber) => {
  if (!flightNumber) return false;
  // Flight numbers typically: 2-3 letter airline code + 1-4 digit number
  const regex = /^[A-Z]{2,3}\d{1,4}$/i;
  return regex.test(flightNumber);
};

// Validate tail number format
export const isValidTailNumber = (tailNumber) => {
  if (!tailNumber) return false;
  // US tail numbers start with N
  const regex = /^N[A-Z0-9]{1,5}$/i;
  return regex.test(tailNumber);
};

// Validate airport code (IATA)
export const isValidAirportCode = (code) => {
  if (!code) return false;
  // IATA codes are 3 letters
  const regex = /^[A-Z]{3}$/i;
  return regex.test(code);
};

// Validate coordinates
export const isValidCoordinates = (lat, lon) => {
  return (
    typeof lat === 'number' &&
    typeof lon === 'number' &&
    lat >= -90 &&
    lat <= 90 &&
    lon >= -180 &&
    lon <= 180
  );
};
