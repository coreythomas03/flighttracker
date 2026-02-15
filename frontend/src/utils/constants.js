// Flight statuses
export const FLIGHT_STATUS = {
  SCHEDULED: 'SCHEDULED',
  ACTIVE: 'ACTIVE',
  LANDED: 'LANDED',
  CANCELLED: 'CANCELLED',
  DELAYED: 'DELAYED'
};

// Flight status colors
export const STATUS_COLORS = {
  SCHEDULED: '#3498db',
  ACTIVE: '#2ecc71',
  LANDED: '#95a5a6',
  CANCELLED: '#e74c3c',
  DELAYED: '#f39c12'
};

// Entity types
export const ENTITY_TYPES = {
  CELEBRITY: 'CELEBRITY',
  COMPANY: 'COMPANY',
  GOVERNMENT: 'GOVERNMENT',
  OTHER: 'OTHER'
};

// Polling intervals (milliseconds)
export const POLLING_INTERVALS = {
  FLIGHT_UPDATE: 60000,      // 1 minute
  ACTIVE_FLIGHTS: 30000,     // 30 seconds
  POSITION_UPDATE: 10000     // 10 seconds
};

// API endpoints
export const API_ENDPOINTS = {
  FLIGHTS: '/flights',
  AIRCRAFT: '/aircraft',
  ENTITIES: '/entities',
  TRACKING: '/tracking'
};