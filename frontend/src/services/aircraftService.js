import apiClient from './api';

const aircraftService = {
  // Get all aircraft
  getAllAircraft: async () => {
    try {
      const response = await apiClient.get('/aircraft');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get aircraft by ID
  getAircraftById: async (aircraftId) => {
    try {
      const response = await apiClient.get(`/aircraft/${aircraftId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get aircraft by tail number
  getAircraftByTailNumber: async (tailNumber) => {
    try {
      const response = await apiClient.get(`/aircraft/tail/${tailNumber}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default aircraftService;
