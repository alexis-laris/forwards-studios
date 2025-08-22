import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import miniatura from '../assets/imgs-examples/miniatura-ejemplo.webp';
import video from '../assets/videos/video.mp4';

const servicios = [
    {
        title: "Creación de Miniaturas",
        description:
            "Diseñamos miniaturas llamativas y profesionales para tus videos, que aumentan la tasa de clics y captan la atención en segundos.",
        details: [
            "Diseños personalizados",
            "Adaptadas a todas las plataformas",
            "Entrega rápida y revisiones ilimitadas",
        ],
        img: miniatura,
    },
    {
        title: "Edición de Vídeo",
        description:
            "Transformamos tu material bruto en historias visuales impactantes con cortes profesionales, corrección de color y efectos especiales.",
        details: [
            "Edición creativa y técnica",
            "Optimización para redes sociales",
            "Corrección de color avanzada",
        ],
        video,
    },
    {
        title: "Marketing Digital",
        description:
            "Estrategias enfocadas en resultados para aumentar tu presencia online, atraer clientes potenciales y consolidar tu marca.",
        details: [
            "Investigación y análisis de mercado",
            "Campañas multicanal efectivas",
            "Monitoreo y optimización constante",
        ],
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
];

export default function Servicios() {
    return (
        <div
            className="min-h-screen py-20 px-6 sm:px-12 lg:px-24 font-Montserrat text-white bg-gradient-to-b from-[#220f5a] to-[#0a061e]"
            id="servicios"
        >
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-Montserrat bg-gradient-to-r from-white via-gray-300 to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-8 text-center">
                    Nuestros <span className="italic font-times">Servicios</span>
                </h2>
                <p className="max-w-3xl mx-auto text-gray-400 text-lg sm:text-xl italic">
                    Soluciones modernas y minimalistas para que tu marca brille en el mundo digital.
                </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {servicios.map(({ title, description, details, img, video }) => (
                    <div
                        key={title}
                        className="rounded-xl bg-gray-950 bg-opacity-40 backdrop-blur-lg border border-gray-600 flex flex-col overflow-hidden cursor-pointer hover:bg-opacity-60 transition duration-300 shadow-lg"
                    >
                        <div className="h-48 sm:h-56 overflow-hidden rounded-t-xl">
                            {video ? (
                                <video
                                    src={video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            ) : (
                                <img
                                    src={img}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    loading="lazy"
                                />
                            )}
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-semibold mb-2 text-purple-300">{title}</h3>
                            <p className="text-gray-300 mb-4 flex-grow">{description}</p>
                            <ul className="mb-6 list-disc list-inside text-gray-400 space-y-1">
                                {details.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            {title === "Creación de Miniaturas" ? (
                                <Link to="/miniaturas">
                                    <Button className="cursor-pointer mt-auto self-start px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-medium transition-colors">
                                        Ver más
                                    </Button>
                                </Link>
                            ) : title === "Edición de Vídeo" ? (
                                <Link to="/videos">
                                    <Button className="cursor-pointer mt-auto self-start px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-medium transition-colors">
                                        Ver más
                                    </Button>
                                </Link>
                            ) : (
                                <Button className="cursor-pointer mt-auto self-start px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-full text-white font-medium transition-colors">
                                    Ver más
                                </Button>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
