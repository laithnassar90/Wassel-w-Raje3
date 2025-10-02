import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, DollarSign } from 'lucide-react';

const OfferRidePage: React.FC = () => {
  const [rideForm, setRideForm] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: '1',
    price: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Offering ride:', rideForm);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-2 shadow-sm border">
              <img
                src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png"
                alt="Wassel Logo"
                className="w-full h-full object-contain"
              />
            </div>
            Offer a Ride
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="from">From</Label>
                <Input
                  id="from"
                  placeholder="Starting location"
                  value={rideForm.from}
                  onChange={(e) => setRideForm({...rideForm, from: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="to">To</Label>
                <Input
                  id="to"
                  placeholder="Destination"
                  value={rideForm.to}
                  onChange={(e) => setRideForm({...rideForm, to: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={rideForm.date}
                  onChange={(e) => setRideForm({...rideForm, date: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={rideForm.time}
                  onChange={(e) => setRideForm({...rideForm, time: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="seats">Available Seats</Label>
                <Input
                  id="seats"
                  type="number"
                  min="1"
                  max="8"
                  value={rideForm.seats}
                  onChange={(e) => setRideForm({...rideForm, seats: e.target.value})}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price per Person ($)</Label>
                <Input
                  id="price"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="25.00"
                  value={rideForm.price}
                  onChange={(e) => setRideForm({...rideForm, price: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Additional Notes (Optional)</Label>
              <textarea
                id="description"
                className="flex min-h-[80px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any additional information about your ride..."
                value={rideForm.description}
                onChange={(e) => setRideForm({...rideForm, description: e.target.value})}
              />
            </div>

            <Button type="submit" className="w-full">
              Offer Ride
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfferRidePage;