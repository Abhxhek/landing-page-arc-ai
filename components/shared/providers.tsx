"use client";

import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import { BookingModalProvider } from "./booking-modal-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <BookingModalProvider>
                {children}
            </BookingModalProvider>
        );
    }

    return (
        <BookingModalProvider>
            {children}
            <Toaster />
        </BookingModalProvider>
    );
}