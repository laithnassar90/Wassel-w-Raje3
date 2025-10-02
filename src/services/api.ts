const API_BASE = 'http://localhost:3001/api';

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
    const mockRides: Ride[] = [
      {
        id: '1',
        from: params.from || 'Dubai Marina',
        to: params.to || 'Sharjah City',
        date: params.date || '2024-01-10',
        time: '09:00',
        driver: { name: 'Ahmed Al Mazrouei', avatar: 'https://placehold.co/40x40', rating: 4.8, trips: 120 },
        seatsAvailable: 2,
        price: 25,
        duration: '45m',
      },
      {
        id: '2',
        from: params.from || 'Jumeirah Beach',
        to: params.to || 'Al Ain',
        date: params.date || '2024-01-12',
        time: '12:30',
        driver: { name: 'Fatima Hassan', avatar: 'https://placehold.co/40x40', rating: 4.9, trips: 89 },
        seatsAvailable: 3,
        price: 40,
        duration: '1h 45m',
      },
    ];
    return new Promise((resolve) => setTimeout(() => resolve(mockRides), 500));
  },

  async createRide(data: any): Promise<{ success: boolean; id: string }> {
    return new Promise((resolve) => 
      setTimeout(() => resolve({ success: true, id: Date.now().toString() }), 500)
    );
  },

  async joinRide(rideId: string): Promise<{ success: boolean }> {
    return new Promise((resolve) => 
      setTimeout(() => resolve({ success: true }), 500)
    );
  }
};
