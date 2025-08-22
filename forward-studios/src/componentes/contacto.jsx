import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Contacto() {
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);


    const bubbles = Array.from({ length: 8 });

    return (
        <div
            ref={ref}
            id="contacto"
            className="
                relative bg-gray-950 min-h-screen 
                px-3 sm:px-4 md:px-8 
                flex justify-center items-start text-white overflow-hidden 
                pt-16 sm:pt-24 md:pt-32 lg:pt-40
                animate-gradient
            "
            style={{
                background: "linear-gradient(120deg, #1a1a1a, #2a1d4a, #1a1a1a)",
                backgroundSize: "400% 400%",
                animation: "gradientShift 15s ease infinite",
            }}
        >

            {bubbles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-purple-500 rounded-full opacity-20"
                    style={{
                        width: `${Math.random() * 20 + 10}px`,
                        height: `${Math.random() * 20 + 10}px`,
                        left: `${Math.random() * 100}%`,
                        bottom: "-50px",
                    }}
                    animate={{
                        y: ["0%", "-120vh"],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut",
                    }}
                />
            ))}




            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center max-w-md sm:max-w-lg md:max-w-2xl w-full px-2"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold font-Montserrat bg-gradient-to-r from-white via-gray-300 to-gray-300 bg-clip-text text-transparent mb-4"
                >
                    Contáctanos
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="text-sm sm:text-base md:text-lg font-Montserrat mb-4"
                >
                    <a
                        href="https://wa.me/523121252527"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block bg-[#4E1AD7] hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                    >
                        Escríbenos por WhatsApp 📞 +52 1 312 125 2527
                    </a>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-xs sm:text-sm md:text-base text-gray-400 italic font-Montserrat px-3"
                >
                    ¿Tienes dudas o quieres colaborar? ¡Contáctanos y te responderemos lo antes posible!
                </motion.p>
            </motion.div>


            <style jsx>{`
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </div>
    );
}
