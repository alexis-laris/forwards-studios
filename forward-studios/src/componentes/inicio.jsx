import "../helpers/Particles.css";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import carlitos from "../assets/youtubers/carlitos.webp";
import karim from "../assets/youtubers/karim.webp";
import hermanasJM from "../assets/youtubers/hermanasJM.webp";
import tvana from "../assets/youtubers/tvana.webp";
import anana from "../assets/youtubers/anana.webp";
import guarura from "../assets/youtubers/guarura.webp";
import yankee from "../assets/youtubers/yankee.webp";
import lulu99 from "../assets/youtubers/lulu99.webp";
import lupita from "../assets/youtubers/lupita.webp";
import gibby from "../assets/youtubers/gibby.webp";


import videoSrc from "../assets/videos/video.mp4";

const images = [carlitos, karim, hermanasJM, tvana, anana, guarura, yankee, lulu99, lupita, gibby];
const emojis = ["✨", "🚀", "💡", "🌟", "🔥", "💻", "📈", "🎨", "🌐", "🔗", "📊", "💬"];

function Particles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {emojis.map((emoji, index) => (
                <motion.span
                    key={index}
                    className="absolute text-xl"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 0.6, y: -200 }}
                    transition={{
                        delay: Math.random() * 5,
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {emoji}
                </motion.span>
            ))}
            {emojis.map((emoji, index) => (
                <motion.span
                    key={`down-${index}`}
                    className="absolute text-xl"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 0.6, y: 200 }}
                    transition={{
                        delay: Math.random() * 5,
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    {emoji}
                </motion.span>
            ))}
        </div>
    );
}

export default function Inicio() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div id="inicio">
            <div className="relative flex min-h-screen items-center justify-center bg-gray-950 px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="absolute bottom-0 left-0 right-0 h-60 sm:h-72 md:h-80 bg-gradient-to-t from-[#361486] to-transparent z-0 pointer-events-none" />
                <Particles />

                <div className="container text-center relative z-10 py-10 sm:py-16 lg:py-32">

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-Montserrat bg-gradient-to-r from-white via-gray-300 to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-8"
                        style={{ paddingBottom: "0.15em" }}
                    >
                        <>
                            <style>{`
                                @keyframes shine {
                                    0% { background-position: -200% 0; }
                                    100% { background-position: 200% 0; }
                                }
                                .shine-text {
                                    background-size: 200% 100%;
                                    animation: shine 2.5s infinite;
                                }
                            `}</style>
                            Comienza{" "}
                            <span className="italic font-times bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent shine-text">
                                hoy mismo
                            </span>
                        </>
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 font-Montserrat max-w-3xl mx-auto italic"
                    >
                        Crea sin límites. Nosotros nos encargamos del resto.
                    </motion.p>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 font-Montserrat mb-16 px-2 sm:px-0"
                    >
                        <a href="#servicios" className="no-underline">
                            <Button className="px-8 sm:px-10 py-4 text-base rounded-full bg-[#4E1AD7] hover:bg-purple-700 cursor-pointer font-normal transition-all duration-200 min-w-[160px]">
                                Ver más
                            </Button>
                        </a>

                        <Button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 sm:px-10 py-4 text-base rounded-full cursor-pointer font-normal bg-gray-600 hover:bg-gray-700 transition-all duration-200 min-w-[160px]"
                        >
                            Mirar Video
                        </Button>
                    </motion.div>


                    <div className="relative overflow-hidden px-2 sm:px-4 lg:px-12">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.3 }}
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 font-Montserrat italic text-center"
                        >
                            Principales Colaboradores
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                            className="flex justify-start sm:justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-900 px-1 sm:px-4 animate-pulse"
                        >
                            {images.map((src, i) => (
                                <div
                                    key={i}
                                    className="flex-shrink-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 p-[3px] rounded-full cursor-pointer"
                                    aria-label={`Confianza logo ${i + 1}`}
                                >
                                    <div
                                        className="rounded-full overflow-hidden bg-black"
                                        style={{ width: "3.5rem", height: "3.5rem" }}
                                    >
                                        <img
                                            src={src}
                                            alt={`Confianza logo ${i + 1}`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>


                    <div className="flex justify-center">
                        <div className="w-full max-w-4xl">
                            <Separator className="my-10 bg-[#4E1AD7]" />
                        </div>
                    </div>
                </div>
            </div>



            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-lg p-4 max-w-3xl w-full relative shadow-2xl">

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold cursor-pointer"
                        >
                            &times;
                        </button>


                        <video
                            src={videoSrc}
                            controls
                            autoPlay
                            muted
                            className="max-w-full aspect-video rounded-md mt-4 object-cover"
                        />
                    </div>
                </div>
            )}

        </div>
    );
}
