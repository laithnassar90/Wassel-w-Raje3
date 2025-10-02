export const HeaderActions = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
      <button className="relative text-xs font-medium items-center bg-transparent caret-transparent gap-x-2 flex h-8 justify-center leading-4 gap-y-2 text-center text-nowrap px-3 py-0 rounded-lg hover:text-cyan-700 hover:bg-slate-50">
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-12.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
        <span className="absolute bg-rose-900 box-border caret-transparent block h-3 text-nowrap w-3 rounded-full -right-1 -top-1"></span>
      </button>
      <span className="relative box-border caret-transparent flex shrink-0 h-8 w-8 overflow-hidden rounded-full">
        <img
          alt="Profile"
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/32x32.svg"
          className="aspect-square box-border caret-transparent h-full max-w-full w-full"
        />
      </span>
    </div>
  );
};
