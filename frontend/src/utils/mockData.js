// Mock Flight Data
export const mockFlights = [
  {
    flightId: 1,
    flightNumber: 'TS001',
    aircraftId: 1,
    tailNumber: 'N628TS',
    aircraftType: 'Gulfstream G650',
    origin: 'LAX',
    originName: 'Los Angeles International',
    destination: 'JFK',
    destinationName: 'John F. Kennedy International',
    departureTime: '2024-02-13T10:00:00',
    arrivalTime: null,
    estimatedArrivalTime: '2024-02-13T18:30:00',
    status: 'ACTIVE',
    entityName: 'Taylor Swift',
    entityType: 'CELEBRITY',
    currentPosition: {
      latitude: 39.8000,
      longitude: -82.0000,
      altitude: 38000,
      groundSpeed: 475,
      heading: 68
    }
  },
  {
    flightId: 2,
    flightNumber: 'NK100',
    aircraftId: 4,
    tailNumber: 'N1KE',
    aircraftType: 'Gulfstream G-V',
    origin: 'PDX',
    originName: 'Portland International',
    destination: 'ATL',
    destinationName: 'Hartsfield-Jackson Atlanta',
    departureTime: '2024-02-13T11:00:00',
    arrivalTime: null,
    estimatedArrivalTime: '2024-02-13T19:00:00',
    status: 'ACTIVE',
    entityName: 'Nike Inc',
    entityType: 'COMPANY',
    currentPosition: {
      latitude: 39.5000,
      longitude: -96.0000,
      altitude: 37500,
      groundSpeed: 475,
      heading: 108
    }
  },
  {
    flightId: 3,
    flightNumber: 'AMZ123',
    aircraftId: 3,
    tailNumber: 'N757AF',
    aircraftType: 'Boeing 757-200',
    origin: 'SEA',
    originName: 'Seattle-Tacoma International',
    destination: 'IAD',
    destinationName: 'Washington Dulles International',
    departureTime: '2024-02-12T14:00:00',
    arrivalTime: '2024-02-12T22:00:00',
    estimatedArrivalTime: '2024-02-12T22:00:00',
    status: 'LANDED',
    entityName: 'Amazon Inc',
    entityType: 'COMPANY',
    currentPosition: null
  },
  {
    flightId: 4,
    flightNumber: 'AF1',
    aircraftId: 7,
    tailNumber: 'N28000',
    aircraftType: 'Boeing 747-200',
    origin: 'JBA',
    originName: 'Joint Base Andrews',
    destination: 'LAX',
    destinationName: 'Los Angeles International',
    departureTime: '2024-02-13T16:00:00',
    arrivalTime: null,
    estimatedArrivalTime: '2024-02-13T21:00:00',
    status: 'SCHEDULED',
    entityName: 'Air Force One',
    entityType: 'GOVERNMENT',
    currentPosition: null
  },
  {
    flightId: 5,
    flightNumber: 'SPX200',
    aircraftId: 8,
    tailNumber: 'N910TE',
    aircraftType: 'Dassault Falcon 7X',
    origin: 'LAX',
    originName: 'Los Angeles International',
    destination: 'KSC',
    destinationName: 'Kennedy Space Center',
    departureTime: '2024-02-11T09:00:00',
    arrivalTime: '2024-02-11T17:00:00',
    estimatedArrivalTime: '2024-02-11T17:00:00',
    status: 'LANDED',
    entityName: 'SpaceX',
    entityType: 'COMPANY',
    currentPosition: null
  },
  {
    flightId: 6,
    flightNumber: 'META01',
    aircraftId: 12,
    tailNumber: 'N456CD',
    aircraftType: 'Bombardier Challenger 650',
    origin: 'SFO',
    originName: 'San Francisco International',
    destination: 'ORD',
    destinationName: "O'Hare International",
    departureTime: '2024-02-13T12:30:00',
    arrivalTime: null,
    estimatedArrivalTime: '2024-02-13T19:30:00',
    status: 'DELAYED',
    entityName: 'Meta Platforms',
    entityType: 'COMPANY',
    currentPosition: null
  }
];

// Mock Aircraft Data
export const mockAircraft = [
  {
    aircraftId: 1,
    tailNumber: 'N628TS',
    aircraftType: 'Gulfstream G650',
    manufacturer: 'Gulfstream Aerospace',
    entities: [
      { entityId: 1, name: 'Taylor Swift', type: 'CELEBRITY' }
    ]
  },
  {
    aircraftId: 3,
    tailNumber: 'N757AF',
    aircraftType: 'Boeing 757-200',
    manufacturer: 'Boeing',
    entities: [
      { entityId: 3, name: 'Amazon Inc', type: 'COMPANY' }
    ]
  },
  {
    aircraftId: 4,
    tailNumber: 'N1KE',
    aircraftType: 'Gulfstream G-V',
    manufacturer: 'Gulfstream Aerospace',
    entities: [
      { entityId: 4, name: 'Nike Inc', type: 'COMPANY' }
    ]
  },
  {
    aircraftId: 7,
    tailNumber: 'N28000',
    aircraftType: 'Boeing 747-200',
    manufacturer: 'Boeing',
    entities: [
      { entityId: 6, name: 'Air Force One', type: 'GOVERNMENT' }
    ]
  },
  {
    aircraftId: 8,
    tailNumber: 'N910TE',
    aircraftType: 'Dassault Falcon 7X',
    manufacturer: 'Dassault Aviation',
    entities: [
      { entityId: 5, name: 'SpaceX', type: 'COMPANY' }
    ]
  }
];

// Mock Tracked Entities
export const mockEntities = [
  { entityId: 1, name: 'Taylor Swift', type: 'CELEBRITY', description: 'American singer-songwriter' },
  { entityId: 2, name: 'Travis Kelce', type: 'CELEBRITY', description: 'NFL player for Kansas City Chiefs' },
  { entityId: 3, name: 'Amazon Inc', type: 'COMPANY', description: 'E-commerce and technology company' },
  { entityId: 4, name: 'Nike Inc', type: 'COMPANY', description: 'Sportswear and athletic equipment company' },
  { entityId: 5, name: 'SpaceX', type: 'COMPANY', description: 'Aerospace manufacturer' },
  { entityId: 6, name: 'Air Force One', type: 'GOVERNMENT', description: 'US Presidential aircraft fleet' }
];

// Mock User Tracking List
export const mockUserTrackings = [
  {
    trackingId: 1,
    type: 'entity',
    entityId: 1,
    entityName: 'Taylor Swift',
    entityType: 'CELEBRITY',
    notificationEnabled: true,
    createdAt: '2024-02-01T10:00:00'
  },
  {
    trackingId: 2,
    type: 'aircraft',
    aircraftId: 4,
    tailNumber: 'N1KE',
    aircraftType: 'Gulfstream G-V',
    notificationEnabled: false,
    createdAt: '2024-02-05T14:30:00'
  },
  {
    trackingId: 3,
    type: 'flight',
    flightNumber: 'AF1',
    notificationEnabled: true,
    createdAt: '2024-02-10T08:15:00'
  },
  {
    trackingId: 4,
    type: 'entity',
    entityId: 2,
    entityName: 'Scott Swanson',
    entityType: 'TEACHING_FACULTY',
    notificationEnabled: true,
    createdAt: '2024-02-01T10:00:00'
  }
];

// Helper function to search flights
export const searchFlights = (query) => {
  if (!query) return mockFlights;
  
  const searchTerm = query.toLowerCase();
  return mockFlights.filter(flight => 
    flight.flightNumber.toLowerCase().includes(searchTerm) ||
    flight.tailNumber.toLowerCase().includes(searchTerm) ||
    flight.entityName.toLowerCase().includes(searchTerm) ||
    flight.origin.toLowerCase().includes(searchTerm) ||
    flight.destination.toLowerCase().includes(searchTerm)
  );
};

// Helper function to get flight by ID
export const getFlightById = (id) => {
  return mockFlights.find(flight => flight.flightId === parseInt(id));
};

// Helper function to get active flights
export const getActiveFlights = () => {
  return mockFlights.filter(flight => flight.status === 'ACTIVE');
};
