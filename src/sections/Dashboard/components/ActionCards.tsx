import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Plus } from 'lucide-react';

export const ActionCards: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Card>
      <CardContent className="p-6">
        <Search className="h-8 w-8 text-blue-600 mb-4" />
        <h3 className="font-semibold mb-2">Find a Ride</h3>
        <p className="text-gray-600 text-sm mb-4">Search for available rides to your destination</p>
        <Button className="w-full">Find Ride</Button>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-6">
        <Plus className="h-8 w-8 text-green-600 mb-4" />
        <h3 className="font-semibold mb-2">Offer a Ride</h3>
        <p className="text-gray-600 text-sm mb-4">Share your journey and earn money</p>
        <Button className="w-full">Offer Ride</Button>
      </CardContent>
    </Card>
  </div>
);