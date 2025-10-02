export const RecentActivity = () => {
  return (
    <div className="text-zinc-800 bg-white shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_1px_3px_0px,rgba(0,0,0,0.1)_0px_1px_2px_-1px] box-border caret-transparent border border-gray-300 mt-8 rounded-xl border-solid">
      <div className="box-border caret-transparent flex flex-col p-6">
        <div className="text-neutral-800 font-semibold box-border caret-transparent tracking-[-0.4px] leading-4">
          Recent Activity
        </div>
      </div>
      <div className="box-border caret-transparent pb-6 px-6">
        <div className="box-border caret-transparent">
          <div className="items-center bg-slate-50 bg-[linear-gradient(135deg,rgb(240,253,250),rgb(248,250,252))] box-border caret-transparent flex p-4 rounded-xl">
            <div className="items-center bg-cyan-700 box-border caret-transparent flex h-10 justify-center w-10 rounded-full">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-18.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-5 w-5"
              />
            </div>
            <div className="box-border caret-transparent basis-[0%] grow ml-4">
              <p className="text-neutral-800 font-medium box-border caret-transparent">
                Dubai → Abu Dhabi
              </p>
              <p className="text-gray-400 text-sm box-border caret-transparent leading-5">
                2024-01-15 at 09:00
              </p>
            </div>
            <div className="box-border caret-transparent text-right ml-4">
              <p className="text-neutral-800 font-semibold box-border caret-transparent">
                $45
              </p>
              <p className="text-gray-400 text-sm box-border caret-transparent leading-5 capitalize">
                upcoming
              </p>
            </div>
          </div>
          <div className="items-center bg-slate-50 bg-[linear-gradient(135deg,rgb(240,253,250),rgb(248,250,252))] box-border caret-transparent flex mt-4 p-4 rounded-xl">
            <div className="items-center bg-cyan-700 box-border caret-transparent flex h-10 justify-center w-10 rounded-full">
              <img
                src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-18.svg"
                alt="Icon"
                className="text-white box-border caret-transparent h-5 w-5"
              />
            </div>
            <div className="box-border caret-transparent basis-[0%] grow ml-4">
              <p className="text-neutral-800 font-medium box-border caret-transparent">
                Riyadh → Jeddah
              </p>
              <p className="text-gray-400 text-sm box-border caret-transparent leading-5">
                2024-01-20 at 14:30
              </p>
            </div>
            <div className="box-border caret-transparent text-right ml-4">
              <p className="text-neutral-800 font-semibold box-border caret-transparent">
                $120
              </p>
              <p className="text-gray-400 text-sm box-border caret-transparent leading-5 capitalize">
                upcoming
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
