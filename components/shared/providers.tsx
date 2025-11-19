"use client";

import { Toaster } from "@/components/ui/sonner";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { store } from "@/lib/store";
import "../../app/globals.css"
import Lenis from "lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    if (!mounted) {
        return (
            <Provider store={store}>
                {children}
            </Provider>
        );
    }

    return (
        <Provider store={store}>
            {children}
            <Toaster />
        </Provider>
    );
}