interface Ride {
  id: string;
  from: string;
  to: string;
  date: string;
  time: string;
  driverId: string;
  driverName: string;
  driverAvatar: string;
  driverRating: number;
  seatsAvailable: number;
  totalSeats: number;
  price: number;
  duration: string;
  description?: string;
  status: 'active' | 'completed' | 'cancelled';
}

interface RideRequest {
  from: string;
  to: string;
  date: string;
  time: string;
  seats: number;
  price: number;
  description?: string;
}

class RideService {
  private rides: Ride[] = [
    {
      id: '1',
      from: 'Dubai Marina',
      to: 'Sharjah City',
      date: '2024-01-10',
      time: '09:00',
      driverId: '1',
      driverName: 'Ahmed Al Mazrouei',
      driverAvatar: 'https://placehold.co/40x40',
      driverRating: 4.8,
      seatsAvailable: 2,
      totalSeats: 4,
      price: 25,
      duration: '45m',
      status: 'active'
    },
    {
      id: '2',
      from: 'Jumeirah Beach',
      to: 'Al Ain',
      date: '2024-01-12',
      time: '12:30',
      driverId: '2',
      driverName: 'Fatima Hassan',
      driverAvatar: 'https://placehold.co/40x40',
      driverRating: 4.9,
      seatsAvailable: 3,
      totalSeats: 4,
      price: 40,
      duration: '1h 45m',
      status: 'active'
    }
  ];

  async searchRides(from: string, to: string, date: string, passengers: number): Promise<Ride[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return this.rides.filter(ride => 
      ride.status === 'active' &&
      ride.seatsAvailable >= passengers &&
      (!from || ride.from.toLowerCase().includes(from.toLowerCase())) &&
      (!to || ride.to.toLowerCase().includes(to.toLowerCase())) &&
      (!date || ride.date === date)
    );
  }

  async createRide(rideData: RideRequest, driverId: string): Promise<Ride> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newRide: Ride = {
      id: Date.now().toString(),
      ...rideData,
      driverId,
      driverName: 'Current User', // Would come from auth context
      driverAvatar: 'https://placehold.co/40x40',
      driverRating: 5.0,
      seatsAvailable: rideData.seats,
      totalSeats: rideData.seats,
      status: 'active'
    };
    
    this.rides.push(newRide);
    return newRide;
  }

  async joinRide(rideId: string, passengerId: string, seatsRequested: number): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const ride = this.rides.find(r => r.id === rideId);
    if (ride && ride.seatsAvailable >= seatsRequested) {
      ride.seatsAvailable -= seatsRequested;
      return true;
    }
    return false;
  }

  async getUserRides(userId: string): Promise<Ride[]> {
    await new Promise(resolve => setTimeout(resolve, 300));
    return this.rides.filter(ride => ride.driverId === userId);
  }

  async cancelRide(rideId: string, userId: string): Promise<boolean> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const ride = this.rides.find(r => r.id === rideId && r.driverId === userId);
    if (ride) {
      ride.status = 'cancelled';
      return true;
    }
    return false;
  }
}

export const rideService = new RideService();
export type { Ride, RideRequest };