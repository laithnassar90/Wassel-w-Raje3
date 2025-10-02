import { Logo } from "@/components/ui/Logo";

export const TopBanner = () => {
  return (
    <div className="box-border caret-transparent mb-12">
      <div className="fixed items-center bg-slate-900 border-b-indigo-600 border-l-gray-300 border-r-gray-300 border-t-gray-300 box-border caret-transparent gap-x-1.5 flex h-12 justify-center gap-y-1.5 z-[9999] border-b-[3px] border-solid top-0 inset-x-0 md:gap-x-2.5 md:gap-y-2.5">
        <div className="relative text-slate-100 text-xs box-border caret-transparent leading-[normal] text-center w-fit font-inter md:text-sm">
          Powered by
        </div>
        <div className="relative box-border caret-transparent h-6 w-[150px] md:w-[175px]">
          <Logo size="sm" className="absolute left-0 top-0 p-0.5" />
          <div className="absolute text-white text-[15px] font-semibold box-border caret-transparent leading-[15.8px] text-nowrap left-7 top-[3px] font-mulish md:text-[17px]">
            wassel
          </div>
          <div className="absolute text-violet-400 text-[17px] font-semibold box-border caret-transparent hidden leading-[15.8px] text-nowrap left-[84px] top-[3px] font-mulish md:block">
            dashboard
          </div>
        </div>
        <p className="relative text-slate-100 text-xs box-border caret-transparent hidden leading-[normal] min-h-0 min-w-0 text-center w-fit font-inter md:text-sm md:block md:min-h-[auto] md:min-w-[auto]">
          Your trusted ride-sharing platform
        </p>
        <a
          href="#"
          className="relative items-center bg-cyan-700 box-border caret-transparent gap-x-2 flex shrink-0 h-7 justify-center gap-y-2 px-3 rounded-md hover:bg-cyan-700/90"
        >
          <div className="relative text-neutral-200 text-xs font-semibold box-border caret-transparent leading-[19.2px] text-nowrap w-fit font-mulish">
            Get Started
          </div>
        </a>
      </div>
    </div>
  );
};
