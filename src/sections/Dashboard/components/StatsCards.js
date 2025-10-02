export const StatsCards = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mt-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">
      <div className="text-zinc-800 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent border border-gray-300 rounded-xl border-solid">
        <div className="items-center box-border caret-transparent flex justify-between pt-6 pb-2 px-6">
          <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.35px] leading-5">
            Upcoming Trips
          </div>
          <img
            src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-15.svg"
            alt="Icon"
            className="text-gray-400 box-border caret-transparent h-4 w-4"
          />
        </div>
        <div className="box-border caret-transparent pb-6 px-6">
          <div className="text-neutral-800 text-2xl font-bold box-border caret-transparent leading-8">
            2
          </div>
          <p className="text-gray-400 text-xs box-border caret-transparent leading-4">
            Active bookings
          </p>
        </div>
      </div>
      <div className="text-zinc-800 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent border border-gray-300 rounded-xl border-solid">
        <div className="items-center box-border caret-transparent flex justify-between pt-6 pb-2 px-6">
          <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.35px] leading-5">
            Messages
          </div>
          <img
            src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-16.svg"
            alt="Icon"
            className="text-gray-400 box-border caret-transparent h-4 w-4"
          />
        </div>
        <div className="box-border caret-transparent pb-6 px-6">
          <div className="text-neutral-800 text-2xl font-bold box-border caret-transparent leading-8">
            1
          </div>
          <p className="text-gray-400 text-xs box-border caret-transparent leading-4">
            Unread messages
          </p>
        </div>
      </div>
      <div className="text-zinc-800 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent border border-gray-300 rounded-xl border-solid">
        <div className="items-center box-border caret-transparent flex justify-between pt-6 pb-2 px-6">
          <div className="text-neutral-800 text-sm font-medium box-border caret-transparent tracking-[-0.35px] leading-5">
            Wallet Balance
          </div>
          <img
            src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-17.svg"
            alt="Icon"
            className="text-gray-400 box-border caret-transparent h-4 w-4"
          />
        </div>
        <div className="box-border caret-transparent pb-6 px-6">
          <div className="text-neutral-800 text-2xl font-bold box-border caret-transparent leading-8">
            $250
          </div>
          <p className="text-gray-400 text-xs box-border caret-transparent leading-4">
            Available funds
          </p>
        </div>
      </div>
    </div>
  );
};
