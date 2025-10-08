const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export interface Ride {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  driver: {
    name: string;
    avatar: string;
    rating: number;
    trips: number;
  };
  seatsAvailable: number;
  price: number;
  duration: string;
}

export const api = {
  async searchRides(params: { from: string; to: string; date: string; passengers: string }): Promise<Ride[]> {
    const response = await fetch(`${API_BASE}/rides/search?from=${params.from}&to=${params.to}&date=${params.date}`);
    return response.json();
  },

  async createRide(data: any): Promise<{ success: boolean; id: string }> {
    const response = await fetch(`${API_BASE}/rides`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },

  async joinRide(rideId: string): Promise<{ success: boolean }> {
    const response = await fetch(`${API_BASE}/rides/${rideId}/join`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    return response.json();
  },

  async getBusRoutes() {
    const response = await fetch(`${API_BASE}/buses/routes`);
    return response.json();
  },

  async getBusStops() {
    const response = await fetch(`${API_BASE}/buses/stops`);
    return response.json();
  },

  async getZakkaBalance() {
    const response = await fetch(`${API_BASE}/zakka/balance`);
    return response.json();
  },

  async getZakkaLeaderboard() {
    const response = await fetch(`${API_BASE}/zakka/leaderboard`);
    return response.json();
  }
};
