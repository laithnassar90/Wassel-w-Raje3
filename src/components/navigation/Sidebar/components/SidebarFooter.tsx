export const SidebarFooter = () => {
  return (
    <div className="box-border caret-transparent border-gray-300 p-4 border-t border-solid">
      <button className="text-sm items-center bg-transparent caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full px-4 py-2 rounded-lg hover:text-cyan-700 hover:bg-slate-50">
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-8.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Settings
      </button>
      <button className="text-sm items-center bg-transparent caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full mt-2 px-4 py-2 rounded-lg hover:text-cyan-700 hover:bg-slate-50">
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-9.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Profile
      </button>
      <div
        role="none"
        className="bg-gray-300 box-border caret-transparent shrink-0 h-px w-full mt-2"
      ></div>
      <button className="text-red-500 text-sm items-center bg-transparent caret-transparent gap-x-3 inline-flex h-12 justify-start leading-5 gap-y-3 text-left text-nowrap w-full mt-2 px-4 py-2 rounded-lg hover:bg-red-500/10">
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-10.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        Sign Out
      </button>
    </div>
  );
};