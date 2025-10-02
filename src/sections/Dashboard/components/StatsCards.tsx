import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const StatsCards: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Card>
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-blue-600">12</div>
        <div className="text-sm text-gray-600">Rides Taken</div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-green-600">$240</div>
        <div className="text-sm text-gray-600">Money Saved</div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="p-4 text-center">
        <div className="text-2xl font-bold text-purple-600">4.8</div>
        <div className="text-sm text-gray-600">Rating</div>
      </CardContent>
    </Card>
  </div>
);