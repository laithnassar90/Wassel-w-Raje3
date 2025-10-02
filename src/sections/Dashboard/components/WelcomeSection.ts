import { Logo } from "@/components/ui/Logo";

export const WelcomeSection = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Logo
          size="sm"
          className="shadow-sm"
        />
        <div>
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-pink-700 leading-9">
              Welcome back!
            </h1>
            <span className="text-slate-500 text-2xl font-noto_sans_arabic leading-8">
              أهلاً وسهلاً
            </span>
          </div>
          <p className="text-gray-400 mt-2">
            Ready for your next journey with Wassel?
          </p>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid gap-6 mt-8 md:grid-cols-2">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <div className="p-6 flex items-center">
            <div className="p-3 rounded-xl bg-gradient-to-r from-teal-600 to-slate-500">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-13.svg"
                alt="Find a Ride"
                className="h-6 w-6 text-white"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold font-poppins text-neutral-800">
                Find a Ride
              </h3>
              <p className="text-gray-400">Search for available rides</p>
            </div>
            <button className="ml-4 px-4 py-2 h-9 bg-cyan-700 text-white text-sm font-medium rounded-lg shadow hover:bg-cyan-700/90 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
          <div className="p-6 flex items-center">
            <div className="p-3 rounded-xl bg-gradient-to-r from-teal-600 to-slate-500">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-14.svg"
                alt="Offer a Ride"
                className="h-6 w-6 text-white"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold font-poppins text-neutral-800">
                Offer a Ride
              </h3>
              <p className="text-gray-400">Share your journey</p>
            </div>
            <button className="ml-4 px-4 py-2 h-9 bg-cyan-700 text-white text-sm font-medium rounded-lg shadow hover:bg-cyan-700/90 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 mt-8 md:grid-cols-3">
        {[
          { title: "Upcoming Trips", value: "2", desc: "Active bookings", icon: "icon-15.svg" },
          { title: "Messages", value: "1", desc: "Unread messages", icon: "icon-16.svg" },
          { title: "Wallet Balance", value: "$250", desc: "Available funds", icon: "icon-17.svg" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 rounded-xl shadow p-6"
          >
            <div className="flex justify-between items-center pb-2">
              <div className="text-sm font-medium text-neutral-800">{item.title}</div>
              <img
                src={`https://c.animaapp.com/mfzum9yxwZ0GbV/assets/${item.icon}`}
                alt={item.title}
                className="h-4 w-4 text-gray-400"
              />
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-800">{item.value}</div>
              <p className="text-xs text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-300 rounded-xl shadow mt-8">
        <div className="p-6 font-semibold text-neutral-800">Recent Activity</div>
        <div className="px-6 pb-6 space-y-4">
          {[
            { route: "Dubai → Abu Dhabi", date: "2024-01-15 at 09:00", price: "$45" },
            { route: "Riyadh → Jeddah", date: "2024-01-20 at 14:30", price: "$120" },
          ].map((trip, i) => (
            <div
              key={i}
              className="flex items-center bg-slate-50 p-4 rounded-xl"
            >
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
