"use client";

import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <>
                {children}
            </>

        );
    }

    return (
        <>
            {children}
            <Toaster />
        </>
    );
}