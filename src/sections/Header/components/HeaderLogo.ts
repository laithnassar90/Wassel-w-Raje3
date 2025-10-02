import { Logo } from "@/components/ui/Logo";

export const HeaderLogo = () => {
  return (
    <div className="items-center box-border caret-transparent gap-x-4 flex gap-y-4">
      <Logo size="md" className="block md:hidden" />
      <div className="items-center box-border caret-transparent gap-x-3 flex gap-y-3">
        <h2 className="text-xl font-semibold box-border caret-transparent leading-7 font-poppins">
          Dashboard
        </h2>
        <span className="text-gray-400 text-sm box-border caret-transparent block leading-5 text-right font-noto_sans_arabic">
          واصل
        </span>
      </div>
    </div>
  );
};
