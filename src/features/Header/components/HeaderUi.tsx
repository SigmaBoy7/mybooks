export default function HeaderUi({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 py-3 px-2">
      <div className="flex align-middle">
        <div className="flex bg-backgrounde grow gap-3 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
