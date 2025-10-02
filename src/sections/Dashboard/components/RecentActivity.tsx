import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export const RecentActivity: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <div>
            <div className="font-medium">Dubai to Sharjah</div>
            <div className="text-sm text-gray-600">Yesterday, 9:00 AM</div>
          </div>
          <div className="text-green-600 font-medium">$25</div>
        </div>
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <div>
            <div className="font-medium">Abu Dhabi to Dubai</div>
            <div className="text-sm text-gray-600">Jan 8, 2:30 PM</div>
          </div>
          <div className="text-green-600 font-medium">$40</div>
        </div>
      </div>
    </CardContent>
  </Card>
);