import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) setVisible(true);
            else setVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <Button
            variant="default"
            size="icon"
            onClick={scrollToTop}
            aria-label="Subir arriba"
            title="Subir arriba"
            className="
        fixed bottom-6 right-6 z-50
        w-10 h-10
        bg-black bg-opacity-40 backdrop-blur-sm
        border border-purple-600
        text-purple-400
        hover:bg-purple-700 hover:text-white
        cursor-pointer
        flex items-center justify-center
        transition
        shadow-md
      "
        >
            <ArrowUp className="w-5 h-5" />
        </Button>
    );
}
