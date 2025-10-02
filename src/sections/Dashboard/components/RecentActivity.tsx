import React from 'react';

export const RecentActivity: React.FC = () => {
  const trips = [
    { route: "Dubai → Abu Dhabi", date: "2024-01-15 at 09:00", price: "$45" },
    { route: "Riyadh → Jeddah", date: "2024-01-20 at 14:30", price: "$120" },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow mt-8">
      <div className="p-6">
        <div className="font-semibold text-neutral-800">Recent Activity</div>
      </div>
      <div className="px-6 pb-6">
        <div className="space-y-4">
          {trips.map((trip, index) => (
            <div key={index} className="flex items-center bg-slate-50 p-4 rounded-xl">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-cyan-700">
                <img
                  src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-18.svg"
                  alt="Trip Icon"
                  className="h-5 w-5 text-white"
                />
              </div>
              <div className="ml-4 flex-1">
                <p className="font-medium text-neutral-800">{trip.route}</p>
                <p className="text-sm text-gray-400">{trip.date}</p>
              </div>
              <div className="text-right ml-4">
                <p className="font-semibold text-neutral-800">{trip.price}</p>
                <p className="text-sm text-gray-400 capitalize">upcoming</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};