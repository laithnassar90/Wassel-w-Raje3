import { useNavigate, useLocation } from 'react-router-dom';

export const SidebarNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="box-border caret-transparent basis-[0%] grow p-4">
      <button 
        onClick={() => navigate('/dashboard')}
        className={`text-sm items-center caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full px-4 py-2 rounded-lg ${
          isActive('/dashboard') 
            ? 'text-white bg-cyan-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] hover:bg-cyan-700/90'
            : 'bg-transparent hover:text-cyan-700 hover:bg-slate-50'
        }`}
      >
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-2.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Dashboard
      </button>
      <button 
        onClick={() => navigate('/find-ride')}
        className={`text-sm items-center caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full mt-2 px-4 py-2 rounded-lg ${
          isActive('/find-ride') 
            ? 'text-white bg-cyan-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] hover:bg-cyan-700/90'
            : 'bg-transparent hover:text-cyan-700 hover:bg-slate-50'
        }`}
      >
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-3.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Find a Ride
      </button>
      <button 
        onClick={() => navigate('/offer-ride')}
        className={`text-sm items-center caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full mt-2 px-4 py-2 rounded-lg ${
          isActive('/offer-ride') 
            ? 'text-white bg-cyan-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] hover:bg-cyan-700/90'
            : 'bg-transparent hover:text-cyan-700 hover:bg-slate-50'
        }`}
      >
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-4.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Offer a Ride
      </button>
      <button className="text-sm items-center bg-transparent caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full mt-2 px-4 py-2 rounded-lg hover:text-cyan-700 hover:bg-slate-50">
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-5.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        My Trips
      </button>
      <button className="text-sm items-center bg-transparent caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full mt-2 px-4 py-2 rounded-lg hover:text-cyan-700 hover:bg-slate-50">
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-6.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Messages
      </button>
      <button 
        onClick={() => navigate('/profile')}
        className={`text-sm items-center caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full mt-2 px-4 py-2 rounded-lg ${
          isActive('/profile') 
            ? 'text-white bg-cyan-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] hover:bg-cyan-700/90'
            : 'bg-transparent hover:text-cyan-700 hover:bg-slate-50'
        }`}
      >
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-7.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Payments
      </button>
    </nav>
  );
};
