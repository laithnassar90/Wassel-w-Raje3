import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Clock, Users, Star } from 'lucide-react';
import { api, Ride } from '@/services/api';
import { useToast } from '@/components/ui/toast';

export function FindRide() {
  const [searchForm, setSearchForm] = useState({ from: '', to: '', date: '', passengers: '1' });
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();

  const handleSearch = async () => {
    if (!searchForm.from || !searchForm.to || !searchForm.date) {
      showToast('Please fill all fields', 'error');
      return;
    }
    setLoading(true);
    try {
      const results = await api.searchRides(searchForm);
      setRides(results);
      showToast(`Found ${results.length} rides`, 'success');
    } catch (error) {
      showToast('Search failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleJoinRide = async (rideId: string) => {
    try {
      await api.joinRide(rideId);
      showToast('Ride joined successfully!', 'success');
    } catch (error) {
      showToast('Failed to join ride', 'error');
    }
  };

  return (
    <div className="p-6 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-foreground">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-white p-2 shadow-sm border border-gray-100">
              <img src="https://c.animaapp.com/mfz4nq9yxAlLvz/img/logo-wassel_1.png" alt="Wassel Logo" className="w-full h-full object-contain filter contrast-125" style={{ imageRendering: 'crisp-edges' }} />
            </div>
            <span>Find Your Perfect Ride</span>
            <span className="text-sm arabic font-arabic text-wassel-gray">ابحث عن رحلتك المثالية</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {['from', 'to', 'date', 'passengers'].map((field) => {
              const labelMap: Record<string, string> = { from: 'From', to: 'To', date: 'Date', passengers: 'Passengers' };
              const typeMap: Record<string, string> = { date: 'date', passengers: 'number' };
              return (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field} className="text-foreground">{labelMap[field]}</Label>
                  <Input id={field} type={typeMap[field] || 'text'} min={field === 'passengers' ? 1 : undefined} max={field === 'passengers' ? 8 : undefined} placeholder={labelMap[field] + ' city'} value={searchForm[field as keyof typeof searchForm]} onChange={(e) => setSearchForm({ ...searchForm, [field]: e.target.value })} className="bg-background text-foreground border-border" />
                </div>
              );
            })}
            <div className="flex items-end">
              <Button onClick={handleSearch} disabled={loading} className="w-full wassel-button-primary">
                <Search className="h-4 w-4 mr-2" /> {loading ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {rides.length > 0 && (
        <div className="space-y-4">
          <h2 className="font-headline font-semibold text-xl text-foreground">Available Rides</h2>
          <div className="space-y-4">
            {rides.map((ride) => (
              <Card key={ride.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={ride.driver.avatar} alt={ride.driver.name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">{ride.driver.name.split(' ').map((n) => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">{ride.driver.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span>{ride.driver.rating}</span> • <span>{ride.driver.trips} trips</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-wassel-teal" />
                        <span className="font-medium text-foreground">{ride.from}</span>
                        <span className="text-wassel-gray">→</span>
                        <span className="font-medium text-foreground">{ride.to}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{ride.date} at {ride.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{ride.seatsAvailable} seats left</span>
                        </div>
                        <Badge variant="secondary" className="bg-muted text-muted-foreground">{ride.duration}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">${ride.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                      <Button onClick={() => handleJoinRide(ride.id)} className="wassel-button-primary">Join Ride</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
