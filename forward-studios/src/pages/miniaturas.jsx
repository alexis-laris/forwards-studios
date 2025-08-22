import "yet-another-react-lightbox/styles.css";
import '../helpers/Linea.css';
import "../helpers/SiteHeader.css";

import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { MessageCircle, Palette, Pencil, CheckCircle, ArrowRight, ArrowDown } from "lucide-react";

import Miniatura1 from "../assets/miniaturas/miniatura-1.webp";
import Miniatura2 from "../assets/miniaturas/miniatura-2.webp";
import Miniatura3 from "../assets/miniaturas/miniatura-3.webp";
import Miniatura4 from "../assets/miniaturas/miniatura-4.webp";
import Miniatura5 from "../assets/miniaturas/miniatura-5.webp";
import Miniatura6 from "../assets/miniaturas/miniatura-6.webp";
import Miniatura7 from "../assets/miniaturas/miniatura-7.webp";
import Miniatura8 from "../assets/miniaturas/miniatura-8.webp";
import Miniatura9 from "../assets/miniaturas/miniatura-9.webp";
import Miniatura10 from "../assets/miniaturas/miniatura-10.webp";
import Miniatura11 from "../assets/miniaturas/miniatura-11.webp";
import Miniatura12 from "../assets/miniaturas/miniatura-12.webp";

const imagenes = [
    { src: Miniatura1, alt: "Miniatura 1" },
    { src: Miniatura2, alt: "Miniatura 2" },
    { src: Miniatura3, alt: "Miniatura 3" },
    { src: Miniatura4, alt: "Miniatura 4" },
    { src: Miniatura5, alt: "Miniatura 5" },
    { src: Miniatura6, alt: "Miniatura 6" },
    { src: Miniatura7, alt: "Miniatura 7" },
    { src: Miniatura8, alt: "Miniatura 8" },
    { src: Miniatura9, alt: "Miniatura 9" },
    { src: Miniatura10, alt: "Miniatura 10" },
    { src: Miniatura11, alt: "Miniatura 11" },
    { src: Miniatura12, alt: "Miniatura 12" },
];

export default function Miniaturas() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = imagenes.map(({ src, alt }) => ({
        src,
        description: alt,
    }));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [step, setStep] = useState(1);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (completed) {

            const timer = setTimeout(() => {
                setStep(1);
                setCompleted(false);
            }, 3000);
            return () => clearTimeout(timer);
        }

        const interval = setInterval(() => {
            setStep(prev => {
                if (prev >= 4) {
                    setCompleted(true);
                    return prev;
                }
                return prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [completed]);


    const isActive = (n) => n <= step;

    return (
        <div
            className="min-h-screen py-20 px-6 text-white relative bg-black font-Montserrat"
            style={{
                backgroundImage: `
                radial-gradient(circle at top right, rgba(139, 92, 246, 0.3), transparent 70%),
                radial-gradient(circle at bottom left, rgba(255, 165, 0, 0.3), transparent 70%)
                `
            }}
        >
            <div className="relative max-w-[1280px] mx-auto">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-Montserrat bg-gradient-to-r from-white via-gray-300 to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-8">
                    Servicio de{" "}
                    <span className="italic font-times bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent shine-text">
                        Miniaturas
                    </span>{" "}
                    <span
                        style={{
                            backgroundClip: "unset",
                            WebkitBackgroundClip: "unset",
                            color: "white",
                            textFillColor: "initial",
                            WebkitTextFillColor: "initial",
                        }}
                    >
                        🎨
                    </span>
                </h1>




                <p className="text-lg text-gray-400 mb-6 relative z-10">
                    Diseñamos miniaturas llamativas y profesionales para tus videos.
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6 relative z-10">
                    <li>Diseños personalizados</li>
                    <li>Adaptadas a todas las plataformas</li>
                    <li>Entrega rápida y revisiones ilimitadas</li>
                </ul>

                <p className="text-xl text-white mb-4 font-semibold relative z-10">
                    Algunos de nuestros ejemplos
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 relative z-10">
                    {imagenes.map(({ src, alt }, idx) => (
                        <div
                            key={idx}
                            className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-800 aspect-video cursor-pointer"
                            onClick={() => {
                                setIndex(idx);
                                setOpen(true);
                            }}
                        >
                            <img
                                src={src}
                                alt={alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {open && (
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={slides}
                        index={index}
                        on={{ view: ({ index: i }) => setIndex(i) }}
                    />
                )}



                <div className="mt-20 relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white ">
                        ¿Cómo Trabajamos?
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 max-w-3xl">
                        Nuestras miniaturas están diseñadas estratégicamente para captar la atención
                        del espectador desde el primer segundo. Aplicamos principios de diseño como
                        la <span className="text-yellow-400 font-semibold">teoría del color</span>,
                        selección de <span className="text-yellow-400 font-semibold">paletas complementarias</span>,
                        jerarquía visual y uso de <span className="text-yellow-400 font-semibold">tipografía impactante</span>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        <div>
                            <h3 className="text-xl font-semibold text-white mb-4">
                                🎨 Paleta de Colores Estratégica
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Usamos combinaciones como triadas, análogas y complementarias para generar contraste
                                y balance. Esto ayuda a que el título y elementos clave resalten.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <div
                                    className="w-12 h-12 rounded-full"
                                    style={{ backgroundColor: "rgb(255, 59, 48)" }}
                                    title="Rojo vibrante (Primario)"
                                />
                                <div
                                    className="w-12 h-12 rounded-full"
                                    style={{ backgroundColor: "rgb(0, 122, 255)" }}
                                    title="Azul brillante (Complementario)"
                                />
                                <div
                                    className="w-12 h-12 rounded-full"
                                    style={{ backgroundColor: "rgb(52, 199, 89)" }}
                                    title="Verde vibrante"
                                />
                                <div
                                    className="w-12 h-12 rounded-full"
                                    style={{ backgroundColor: "rgb(255, 204, 0)" }}
                                    title="Amarillo intenso"
                                />
                                <div
                                    className="w-12 h-12 rounded-full border border-white bg-black"
                                    title="Fondo contraste"
                                />
                            </div>


                            <div className="mt-10 max-w-4xl mx-auto text-center">
                                <h3 className="text-xl font-semibold text-white mb-6">🎨 Ejemplos de Paletas de Color</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    A continuación mostramos ejemplos de combinaciones de color que aplicamos en tus miniaturas para lograr impacto y armonía visual:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                                    <div className="bg-gray-900 rounded-lg shadow-md p-4">
                                        <h4 className="text-lg font-semibold text-yellow-400 mb-3">Triada</h4>
                                        <p className="text-gray-400 mb-4 text-sm">
                                            Tres colores equidistantes en la rueda de color para balance y contraste.
                                        </p>
                                        <div className="flex justify-center gap-3">
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#FF4136" }} title="Rojo"></div>
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#2ECC40" }} title="Verde"></div>
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#0074D9" }} title="Azul"></div>
                                        </div>
                                    </div>


                                    <div className="bg-gray-900 rounded-lg shadow-md p-4">
                                        <h4 className="text-lg font-semibold text-yellow-400 mb-3">Complementarios</h4>
                                        <p className="text-gray-400 mb-4 text-sm">
                                            Colores opuestos en la rueda que generan contraste fuerte y llamativo.
                                        </p>
                                        <div className="flex justify-center gap-3">
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#FF851B" }} title="Naranja"></div>
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#001F3F" }} title="Azul Oscuro"></div>
                                        </div>
                                    </div>


                                    <div className="bg-gray-900 rounded-lg shadow-md p-4">
                                        <h4 className="text-lg font-semibold text-yellow-400 mb-3">Monocromáticos</h4>
                                        <p className="text-gray-400 mb-4 text-sm">
                                            Variaciones de un solo color con diferentes tonos y saturaciones para armonía.
                                        </p>
                                        <div className="flex justify-center gap-3">
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#001f3f" }} title="Azul oscuro"></div>
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#0074D9" }} title="Azul medio"></div>
                                            <div className="w-10 h-10 rounded-full" style={{ backgroundColor: "#7FDBFF" }} title="Azul claro"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg border border-yellow-500 max-w-md mx-auto text-center">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                ✍️ Tipografía y Jerarquía Visual
                            </h3>
                            <p className="text-gray-400 mb-6">
                                Seleccionamos fuentes legibles y en negrita, ubicadas estratégicamente
                                para que el mensaje sea claro incluso en pantallas pequeñas. Aquí algunos ejemplos:
                            </p>
                            <div className="space-y-3">
                                <p
                                    className="text-3xl text-yellow-400 font-bold"
                                    style={{ fontFamily: 'Cocogoose, sans-serif' }}
                                >
                                    ¡OFERTA SÓLO HOY!
                                </p>
                                <p
                                    className="text-3xl text-pink-500 font-bold font-Luckiest-Guy"

                                >
                                    ¡NO LO CREERÁS!
                                </p>
                                <p
                                    className="text-3xl text-green-400 font-bold"
                                    style={{ fontFamily: '"Burbank Big Condensed", sans-serif' }}
                                >
                                    DESCUENTO EXCLUSIVO
                                </p>
                                <p
                                    className="text-3xl text-cyan-400 font-bold"
                                    style={{ fontFamily: '"Komika Axis", cursive' }}
                                >
                                    ¡100% REAL!
                                </p>
                                <p
                                    className="text-3xl text-white font-bold font-Poppins"

                                >
                                    Título Impactante Aquí
                                </p>
                            </div>
                        </div>


                    </div>






                    <div className="mt-16">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            🧰 Herramientas Profesionales
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Utilizamos software profesional para garantizar resultados visuales de alta calidad:
                        </p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-200">
                            <li className="flex items-center gap-3">
                                <SiAdobephotoshop className="w-8 h-8 text-blue-500" />
                                Adobe Photoshop
                            </li>

                            <li className="flex items-center gap-3">
                                <SiAdobeillustrator className="w-8 h-8 text-orange-500" />
                                Adobe Illustrator
                            </li>
                        </ul>
                    </div>




                    <div className="mt-16 max-w-6xl mx-auto px-4 relative">
                        <h3 className="text-4xl font-semibold text-white mb-10 text-center">🛠️ Proceso Creativo</h3>


                        <div className="relative min-h-[300px]">

                            <div
                                className={`flex flex-col md:flex-row items-center justify-between transition-all duration-700 ${completed ? "opacity-0 pointer-events-none" : "opacity-100"
                                    }`}
                            >

                                <div className="flex flex-col items-center relative md:w-1/4 mb-12 md:mb-0 z-10">
                                    <div
                                        className={`rounded-full p-4 mb-4 shadow-lg transition-filter duration-700 ${isActive(1)
                                            ? "saturate-full bg-red-500 text-white"
                                            : "saturate-zero bg-red-500 text-white opacity-60"
                                            }`}
                                    >
                                        <MessageCircle size={28} />
                                    </div>
                                    <p className="text-white font-semibold text-center max-w-xs">
                                        Nos compartes el tema del video o tu idea.
                                    </p>
                                </div>


                                <div className="hidden md:flex items-center justify-center w-12 mx-6 text-yellow-400">
                                    <ArrowRight size={28} />
                                </div>
                                <div className="flex md:hidden items-center justify-center h-12 my-4 w-full text-yellow-400">
                                    <ArrowDown size={28} />
                                </div>


                                <div className="flex flex-col items-center relative md:w-1/4 mb-12 md:mb-0 z-10">
                                    <div
                                        className={`rounded-full p-4 mb-4 shadow-lg transition-filter duration-700 ${isActive(2)
                                            ? "saturate-full bg-blue-500 text-white"
                                            : "saturate-zero bg-blue-500 text-white opacity-60"
                                            }`}
                                    >
                                        <Palette size={28} />
                                    </div>
                                    <p className="text-white font-semibold text-center max-w-xs">
                                        Elegimos una paleta y estilo adecuado para tu audiencia.
                                    </p>
                                </div>


                                <div className="hidden md:flex items-center justify-center w-12 mx-6 text-yellow-400">
                                    <ArrowRight size={28} />
                                </div>
                                <div className="flex md:hidden items-center justify-center h-12 my-4 w-full text-yellow-400">
                                    <ArrowDown size={28} />
                                </div>


                                <div className="flex flex-col items-center relative md:w-1/4 mb-12 md:mb-0 z-10">
                                    <div
                                        className={`rounded-full p-4 mb-4 shadow-lg transition-filter duration-700 ${isActive(3)
                                            ? "saturate-full bg-pink-500 text-white"
                                            : "saturate-zero bg-pink-500 text-white opacity-60"
                                            }`}
                                    >
                                        <Pencil size={28} />
                                    </div>
                                    <p className="text-white font-semibold text-center max-w-xs">
                                        Diseñamos una miniatura con pruebas visuales y revisiones.
                                    </p>
                                </div>


                                <div className="hidden md:flex items-center justify-center w-12 mx-6 text-yellow-400">
                                    <ArrowRight size={28} />
                                </div>
                                <div className="flex md:hidden items-center justify-center h-12 my-4 w-full text-yellow-400">
                                    <ArrowDown size={28} />
                                </div>


                                <div className="flex flex-col items-center relative md:w-1/4 z-10">
                                    <div
                                        className={`rounded-full p-4 mb-4 shadow-lg transition-filter duration-700 ${isActive(4)
                                            ? "saturate-full bg-yellow-400 text-black"
                                            : "saturate-zero bg-yellow-400 text-black opacity-60"
                                            }`}
                                    >
                                        <CheckCircle size={28} />
                                    </div>
                                    <p className="text-white font-semibold text-center max-w-xs">
                                        Entregamos en formato optimizado para YouTube o tu red.
                                    </p>
                                </div>
                            </div>


                            {completed && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-yellow-400 transition-opacity duration-700">
                                    <span className="text-6xl sm:text-7xl md:text-8xl">🎉</span>
                                    <span className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">¡Completado!</span>
                                    <div className="confetti-container" />
                                </div>
                            )}
                        </div>
                    </div>





                </div>



            </div>

        </div>
    );
}
