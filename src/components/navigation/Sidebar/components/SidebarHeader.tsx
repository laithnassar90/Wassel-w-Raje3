import { Logo } from "@/components/ui/Logo";

export const SidebarHeader = () => {
  return (
    <div className="items-center box-border caret-transparent flex justify-between border-gray-300 p-6 border-b border-solid">
      <div className="items-center box-border caret-transparent flex">
        <Logo size="lg" />
        <div className="box-border caret-transparent ml-3">
          <h1 className="text-lg font-bold bg-clip-text bg-[linear-gradient(135deg,rgb(0,128,128)_0%,rgb(136,0,68)_100%)] box-border caret-transparent leading-7 font-poppins">
            Wassel
          </h1>
          <p className="text-gray-400 text-xs box-border caret-transparent leading-4 text-right font-noto_sans_arabic">
            واصل
          </p>
        </div>
      </div>
      <button className="text-xs font-medium items-center bg-transparent caret-transparent gap-x-2 flex h-8 justify-center leading-4 min-h-[auto] min-w-[auto] gap-y-2 text-center text-nowrap px-3 py-0 rounded-lg md:hidden md:min-h-0 md:min-w-0 hover:text-white hover:bg-rose-900">
        <img
          src="https://c.animaapp.com/mfzum9yxwZ0GbV/assets/icon-1.svg"
          alt="Icon"
          className="box-border caret-transparent shrink-0 h-4 text-nowrap w-4"
        />
      </button>
    </div>
  );
};
