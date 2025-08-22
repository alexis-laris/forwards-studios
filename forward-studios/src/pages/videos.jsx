import "../helpers/SiteHeader.css";
import { SiAdobepremierepro, SiAdobeillustrator } from "react-icons/si";
import React, { useEffect } from "react";
import video from '../assets/videos/video-2.mp4';


export default function Videos() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                    Edición de{" "}
                    <span className="italic font-times bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent shine-text">
                        Videos
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
                        🎥
                    </span>
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 mb-16">
                    {[
                        { title: "🎬 Efectos", text: "Aplicamos efectos visuales profesionales para mejorar la estética y el impacto visual de tus videos." },
                        { title: "✨ Animaciones", text: "Creamos animaciones dinámicas para títulos, logos y transiciones que elevan la calidad del contenido." },
                        { title: "🔊 Sonidos", text: "Integramos música, efectos de sonido y mejoras de audio para una experiencia auditiva envolvente." }
                    ].map((card, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
                            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
                            <p className="text-gray-300">{card.text}</p>
                        </div>
                    ))}
                </div>



                <p className="text-lg text-gray-400 mb-6 relative z-10">
                    Editamos tus videos con calidad profesional para destacar tu contenido.
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-10 relative z-10">
                    <li>Edición personalizada según tu estilo</li>
                    <li>Optimizado para todas las plataformas</li>
                    <li>Entrega rápida y revisiones ilimitadas</li>
                </ul>


                <div className="mt-20 relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white ">
                        ¿Cómo Trabajamos en la Edición de Videos?
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 max-w-3xl">
                        Nuestro proceso de edición está diseñado para transformar tu material en un
                        <span className="text-yellow-400 font-semibold"> video impactante</span>, manteniendo la
                        esencia de tu mensaje y capturando la atención desde el primer segundo. Utilizamos
                        <span className="text-yellow-400 font-semibold"> técnicas profesionales de edición</span>,
                        <span className="text-yellow-400 font-semibold"> corrección de color</span>, y
                        <span className="text-yellow-400 font-semibold"> montaje</span> para asegurar la
                        <span className="text-yellow-400 font-semibold"> máxima calidad</span>.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-7xl mx-auto">

                        <div className="flex justify-center">
                            <video
                                src={video}
                                controls
                                className="w-full max-w-xl rounded-lg shadow-lg"
                                preload="metadata"
                            >
                                Tu navegador no soporta la etiqueta de video.
                            </video>
                        </div>


                        <div className="space-y-8">

                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">
                                    🎞️ Técnicas y Herramientas que utilizamos
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                                    Aplicamos cortes precisos, transiciones suaves y corrección de color avanzada para dar vida a tus videos.
                                    Trabajamos con softwares profesionales como Adobe Premiere Pro y After Effects para lograr resultados impactantes y profesionales.
                                </p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm sm:text-base">
                                    <li>Montaje narrativo que mantiene el interés del espectador</li>
                                    <li>Corrección y gradación de color profesional</li>
                                    <li>Incorporación de efectos y animaciones según necesidad</li>
                                    <li>Optimización para redes sociales y plataformas digitales</li>
                                </ul>
                            </div>


                            <div>
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">🛠️ Software Profesional</h3>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-200 text-sm sm:text-base">
                                    <li className="flex items-center gap-3">
                                        <SiAdobepremierepro className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                                        <span>Premiere Pro</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <SiAdobeillustrator className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" />
                                        <span>After Effects</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="mt-16 sm:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">🎬 Ejemplos de Edición de Video</h3>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                            Estos ejemplos muestran estilos de edición que utilizamos para lograr un contenido visual atractivo, profesional y dinámico:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                            <div className="bg-gray-900 rounded-lg shadow-md p-4 text-left">
                                <h4 className="text-base sm:text-lg font-semibold text-yellow-400 mb-2">Edición Cinemática</h4>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                                    Estilo visual con tonos de cine, cámara lenta y transiciones suaves.
                                </p>
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full rounded-md"
                                        style={{ height: "12rem" }}
                                        src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_1"
                                        title="Edición Cinemática"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>


                            <div className="bg-gray-900 rounded-lg shadow-md p-4 text-left">
                                <h4 className="text-base sm:text-lg font-semibold text-yellow-400 mb-2">Contenido para Redes</h4>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                                    Ediciones rápidas con textos, efectos y ritmo ideal para TikTok o Reels.
                                </p>
                                <div className="aspect-w-9 aspect-h-16">
                                    <iframe
                                        className="w-full rounded-md"
                                        style={{ height: "18rem" }}
                                        src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2"
                                        title="Contenido para Redes"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>


                            <div className="bg-gray-900 rounded-lg shadow-md p-4 text-left">
                                <h4 className="text-base sm:text-lg font-semibold text-yellow-400 mb-2">Explicativo / Tutorial</h4>
                                <p className="text-gray-400 text-xs sm:text-sm mb-3 leading-relaxed">
                                    Videos con voz en off, animaciones didácticas y estructura clara.
                                </p>
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className="w-full rounded-md"
                                        style={{ height: "12rem" }}
                                        src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3"
                                        title="Explicativo / Tutorial"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
