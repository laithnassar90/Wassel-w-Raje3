// API Service Layer
const API_BASE_URL = 'http://localhost:3001/api';

// Mock data for development
export const mockRides = [
  {
    id: '1',
    from: 'Downtown',
    to: 'Airport',
    date: '2024-01-15',
    time: '14:00',
    price: 25,
    driver: 'Ahmed Ali',
    seats: 3
  },
  {
    id: '2',
    from: 'University',
    to: 'Mall',
    date: '2024-01-15',
    time: '16:30',
    price: 15,
    driver: 'Sara Hassan',
    seats: 2
  }
];

// API functions (currently using mock data)
export const api = {
  // Rides
  getRides: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockRides;
  },

  createRide: async (rideData: any) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newRide = {
      id: Date.now().toString(),
      ...rideData
    };
    mockRides.push(newRide);
    return newRide;
  },

  searchRides: async (searchParams: any) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockRides.filter(ride => 
      ride.from.toLowerCase().includes(searchParams.from?.toLowerCase() || '') &&
      ride.to.toLowerCase().includes(searchParams.to?.toLowerCase() || '')
    );
  },

  // User authentication (mock)
  login: async (credentials: { email: string; password: string }) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      user: {
        id: '1',
        name: 'John Doe',
        email: credentials.email
      },
      token: 'mock-jwt-token'
    };
  },

  register: async (userData: any) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      user: {
        id: Date.now().toString(),
        ...userData
      },
      token: 'mock-jwt-token'
    };
  }
};