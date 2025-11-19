"use client"

import { useRouter } from "next/navigation";

export function Header() {
  const { push } = useRouter();

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 pointer-events-none" onClick={() => push("/")}>
      <div className="flex w-full max-w-5xl items-center justify-between rounded-2xl bg-white/40 px-6 py-3 backdrop-blur-xl pointer-events-auto">
        <div className="cursor-pointer text-xs uppercase tracking-[0.35em] font-semibold text-center " >
          zyka.ai
        </div>

        <button className="cursor-pointer rounded-full bg-black px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-white hover:border-black border-black border hover:text-black hover:scale-[1.04]">
          Login or Sign up
        </button>
      </div>
    </header>
  );
}

