export const NotificationContainer = () => {
  return (
    <div
      role="region"
      aria-label="Notifications (F8)"
      className="box-border caret-transparent"
    >
      <ol className="fixed box-border caret-transparent flex flex-col-reverse list-none max-h-[1000px] max-w-none w-full z-[100] p-4 right-auto top-0 bottom-auto md:flex-col md:max-w-[420px] md:right-0 md:top-auto md:bottom-0"></ol>
    </div>
  );
};
