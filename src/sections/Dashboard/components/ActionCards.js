export const ActionCards = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-6 mt-8 md:grid-cols-[repeat(2,minmax(0px,1fr))]">
      <div className="text-zinc-800 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent border border-gray-200 rounded-xl border-solid md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]">
        <div className="box-border caret-transparent p-6">
          <div className="items-center box-border caret-transparent flex">
            <div className="bg-[linear-gradient(135deg,rgb(0,128,128)_0%,rgb(96,125,139)_100%)] box-border caret-transparent p-3 rounded-xl">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-13.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-6 w-6"
              />
            </div>
            <div className="box-border caret-transparent basis-[0%] grow ml-4">
              <h3 className="text-neutral-800 text-lg font-semibold box-border caret-transparent leading-7 font-poppins">
                Find a Ride
              </h3>
              <p className="text-gray-400 box-border caret-transparent">
                Search for available rides
              </p>
            </div>
            <button className="text-white text-sm font-medium items-center bg-cyan-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 flex h-9 justify-center leading-5 gap-y-2 text-center text-nowrap ml-4 px-4 py-2 rounded-lg hover:bg-cyan-700/90">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="text-zinc-800 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent border border-gray-200 rounded-xl border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]">
        <div className="box-border caret-transparent p-6">
          <div className="items-center box-border caret-transparent flex">
            <div className="bg-[linear-gradient(135deg,rgb(0,128,128)_0%,rgb(96,125,139)_100%)] box-border caret-transparent p-3 rounded-xl">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-14.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-6 w-6"
              />
            </div>
            <div className="box-border caret-transparent basis-[0%] grow ml-4">
              <h3 className="text-neutral-800 text-lg font-semibold box-border caret-transparent leading-7 font-poppins">
                Offer a Ride
              </h3>
              <p className="text-gray-400 box-border caret-transparent">
                Share your journey
              </p>
            </div>
            <button className="text-white text-sm font-medium items-center bg-cyan-700 shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] caret-transparent gap-x-2 flex h-9 justify-center leading-5 gap-y-2 text-center text-nowrap ml-4 px-4 py-2 rounded-lg hover:bg-cyan-700/90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
