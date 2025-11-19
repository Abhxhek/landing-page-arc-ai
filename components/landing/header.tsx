export function Header() {
  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex w-full max-w-5xl items-center justify-between rounded-[999px] bg-white/80 px-6 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl border border-white/60 pointer-events-auto">
        <div className="text-xs uppercase tracking-[0.35em] font-semibold text-center ">
          zyka.ai
        </div>

        <button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-black/80">
          Login or Sign up
        </button>
      </div>
    </header>
  );
}

