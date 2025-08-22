import { motion } from "framer-motion";
import { AiFillTikTok, AiFillYoutube, AiFillInstagram } from "react-icons/ai";

import "../helpers/Shine.css";

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
import alerios from "../assets/youtubers/alerios.webp";
import alexander from "../assets/youtubers/alexander.webp";
import daniboy from "../assets/youtubers/daniboy.webp";
import dominguero from "../assets/youtubers/dominguero.webp";
import eltrollino from "../assets/youtubers/eltrollino.webp";
import evelyn from "../assets/youtubers/evelyn.webp";
import gemelos from "../assets/youtubers/gemelos.webp";
import lukas from "../assets/youtubers/lukas.webp";
import natalypop from "../assets/youtubers/natalypop.webp";
import suatoz from "../assets/youtubers/suatoz.webp";
import XIO from "../assets/youtubers/XIO.webp";
import krao from "../assets/youtubers/krao.webp";
import losmolina from "../assets/youtubers/losmolina.jpg";


const clientes = [
    { nombre: "SOY CARLITOS", imagen: carlitos },
    { nombre: "KARIM JUEGA", imagen: karim },
    { nombre: "HERMANAS JM", imagen: hermanasJM },
    { nombre: "TV ANA EMILIA", imagen: tvana },
    { nombre: "ANANA TOYS", imagen: anana },
    { nombre: "EL GUARURA", imagen: guarura },
    { nombre: "IAMYANKEE", imagen: yankee },
    { nombre: "LUL99", imagen: lulu99 },
    { nombre: "LUPITA VILLALOBOS", imagen: lupita },
    { nombre: "GIBBY :)", imagen: gibby },
    { nombre: "SOYALERIOS", imagen: alerios },
    { nombre: "ALEXANDER RODRIGUEZ", imagen: alexander },
    { nombre: "DANIBOY", imagen: daniboy },
    { nombre: "DOMINGUERO", imagen: dominguero },
    { nombre: "EL TROLLINO", imagen: eltrollino },
    { nombre: "EVELYN RANGEL", imagen: evelyn },
    { nombre: "GEMELOS LELOS", imagen: gemelos },
    { nombre: "LUKAS URKIJO", imagen: lukas },
    { nombre: "NATALYPOP", imagen: natalypop },
    { nombre: "LOS SUATOZ", imagen: suatoz },
    { nombre: "XIO", imagen: XIO },
    { nombre: "KRAOESP", imagen: krao },
    { nombre: "LOS MOLINA", imagen: losmolina },
];

const socialProfiles = [
    {
        nombre: "SOY CARLITOS",
        imagen: carlitos,
        redes: {
            TikTok: "",
            YouTube: "8.3M",
            Instagram: "2.5M",
        },
        enlace: "https://www.youtube.com/@SoyCarlitozz"
    },
    {
        nombre: "KARIM JUEGA",
        imagen: karim,
        redes: {
            TikTok: "",
            YouTube: "11.3M",
            Instagram: "179K",
        },
        enlace: "https://www.youtube.com/@karimjuega1037"
    },
    {
        nombre: "HERMANAS JM",
        imagen: hermanasJM,
        redes: {
            TikTok: "22.7M",
            YouTube: "8.3M",
            Instagram: "2.2M",
        },
        enlace: "https://www.youtube.com/@HermanasJM"
    },
    {
        nombre: "TV ANA EMILIA",
        imagen: tvana,
        redes: {
            TikTok: "4.6M",
            YouTube: "15.1M",
            Instagram: "2.4M",
        },
        enlace: "https://www.youtube.com/@TVAnaEmilia"
    },
    {
        nombre: "ANANA TOYS",
        imagen: anana,
        redes: {
            TikTok: "4.7M",
            YouTube: "3.3M",
            Instagram: "",
        },
        enlace: "https://www.youtube.com/@AnaNanaTOYS"
    },
    {
        nombre: "EL GUARURA",
        imagen: guarura,
        redes: {
            TikTok: "947k",
            YouTube: "3.6M",
            Instagram: "2.3M",
        },
        enlace: "https://www.youtube.com/@ElGuarura"
    },
    {
        nombre: "IAMYANKEE",
        imagen: yankee,
        redes: {
            TikTok: "430k",
            YouTube: "1.8M",
            Instagram: "1.2M",
        },
        enlace: "https://www.youtube.com/@IamYankeee"
    },
    {
        nombre: "LULU99",
        imagen: lulu99,
        redes: {
            TikTok: "12.6M",
            YouTube: "13M",
            Instagram: "4.2M",
        },
        enlace: "https://www.youtube.com/@Lulu99"
    },
    {
        nombre: "LUPITA VILLALOBOS",
        imagen: lupita,
        redes: {
            TikTok: "6M",
            YouTube: "3M",
            Instagram: "600K",
        },
        enlace: "https://www.youtube.com/@lupitavillalobos"
    },
    {
        nombre: "GIBBY :)",
        imagen: gibby,
        redes: {
            TikTok: "3.8M",
            YouTube: "12.8M",
            Instagram: "1.7M",
        },
        enlace: "https://www.youtube.com/@gibby"
    },
    {
        nombre: "SOYALERIOS",
        imagen: alerios,
        redes: {
            TikTok: "18M",
            YouTube: "6.5M",
            Instagram: "3M",
        },
        enlace: "https://www.youtube.com/@soyalerios"
    },
    {
        nombre: "ALEXANDER RODRIGUEZ",
        imagen: alexander,
        redes: {
            TikTok: "",
            YouTube: "68k",
            Instagram: "125k",
        },
        enlace: "https://www.youtube.com/@alexanderrv04"
    },
    {
        nombre: "DANIBOY",
        imagen: daniboy,
        redes: {
            TikTok: "843k",
            YouTube: "180k",
            Instagram: "251k",
        },
        enlace: "https://www.youtube.com/@DanyBoy-s6z"
    },
    {
        nombre: "DOMINGUERO",
        imagen: dominguero,
        redes: {
            TikTok: "4.7M",
            YouTube: "3.6M",
            Instagram: "1.9M",
        },
        enlace: "https://www.youtube.com/@Dominguero"
    },
    {
        nombre: "EL TROLLINO",
        imagen: eltrollino,
        redes: {
            TikTok: "2.1M",
            YouTube: "22.3M",
            Instagram: "797k",
        },
        enlace: "https://www.youtube.com/@ElTrollino"
    },
    {
        nombre: "EVELYN RANGEL",
        imagen: evelyn,
        redes: {
            TikTok: "8.8M",
            YouTube: "1.3M",
            Instagram: "565k",
        },
        enlace: "https://www.youtube.com/@EvelynRangel"
    },
    {
        nombre: "GEMELOS LELOS",
        imagen: gemelos,
        redes: {
            TikTok: "2.7M",
            YouTube: "2.1M",
            Instagram: "",
        },
        enlace: "https://www.youtube.com/@gemeloslelos"
    },
    {
        nombre: "LUKAS URKIJO",
        imagen: lukas,
        redes: {
            TikTok: "9.6M",
            YouTube: "2.1M",
            Instagram: "3.3M",
        },
        enlace: "https://www.youtube.com/@LukitasUrkijo"
    },
    {
        nombre: "NATALYPOP",
        imagen: natalypop,
        redes: {
            TikTok: "2.4M",
            YouTube: "2.3M",
            Instagram: "1.0M",
        },
        enlace: "https://www.youtube.com/@NatalyPop"
    },
    {
        nombre: "LOS SUATOZ",
        imagen: suatoz,
        redes: {
            TikTok: "5M",
            YouTube: "9.0M",
            Instagram: "504k",
        },
        enlace: "https://www.youtube.com/@LosSuatoz"
    },
    {
        nombre: "XIO",
        imagen: XIO,
        redes: {
            TikTok: "1.3M",
            YouTube: "19k",
            Instagram: "191k",
        },
        enlace: "https://www.youtube.com/@xiodenali"
    },
    {
        nombre: "KRAOESP",
        imagen: krao,
        redes: {
            TikTok: "74k",
            YouTube: "3.2M",
            Instagram: "86k",
        },
        enlace: "https://www.youtube.com/@KraoESP"
    },
    {
        nombre: "LOS MOLINA",
        imagen: losmolina,
        redes: {
            TikTok: "630k",
            YouTube: "2.7M",
            Instagram: "236K",
        },
        enlace: "https://www.youtube.com/@losmolinaoficial"
    },
    {
        nombre: "Vacío",
        vacio: true
    }
];


function Particles() {
    const icons = ["🏆"];
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
            {[...Array(20)].map((_, index) => (
                <motion.span
                    key={index}
                    className="absolute text-2xl select-none text-yellow-400 drop-shadow-[0_0_4px_rgba(255,215,0,0.8)]"
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
                    {icons[0]}
                </motion.span>
            ))}
        </div>
    );
}

export default function Colaboradores() {
    return (
        <div className="min-h-screen bg-gray-950 py-20 px-6 overflow-hidden text-white relative" id="colaboradores">

            <Particles />


            <div
                aria-hidden="true"
                className="
                pointer-events-none
                absolute
                inset-x-[-20%]   
                bottom-0         
                h-60             
                bg-gradient-to-t
                from-yellow-400/80  
                via-yellow-300/40  
                to-transparent 
                filter
                blur-[60px]
            "
            />



            <div className="max-w-[1280px] mx-auto px-4 relative z-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-Montserrat bg-gradient-to-r from-white via-gray-300 to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-10 text-center">
                    Colaboradores <span className="italic font-times">Destacados</span>
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {socialProfiles.map((profile, index) => (
                        <motion.div
                            key={index}
                            className="relative group w-full aspect-square flex items-center justify-center"
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            {profile.vacio ? (
                                <div className="relative w-[85%] h-[85%] rounded-full border-2 border-gray-500 bg-white text-black flex items-center justify-center text-xl font-semibold">
                                    TU LUGAR


                                    <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                                        ESPACIO DISPONIBLE
                                    </div>
                                </div>


                            ) : (
                                <a
                                    href={profile.enlace}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-[85%] h-[85%] rounded-full overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 border-2 border-gray-800 relative cursor-pointer shimmer-effect block"
                                >
                                    <img
                                        src={profile.imagen}
                                        alt={profile.nombre}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="shine-effect"></div>


                                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-3">
                                        <h3 className="text-sm sm:text-base font-bold mb-2">
                                            {profile.nombre}
                                        </h3>
                                        <div className="space-y-1 text-xs sm:text-sm">
                                            <div className="flex items-center gap-1 justify-center">
                                                <AiFillYoutube className="w-4 h-4 text-red-500" />
                                                <span>{profile.redes?.YouTube}</span>
                                            </div>
                                            <div className="flex items-center gap-1 justify-center">
                                                <AiFillTikTok className="w-4 h-4 text-blue-400" />
                                                <span>{profile.redes?.TikTok}</span>
                                            </div>
                                            <div className="flex items-center gap-1 justify-center">
                                                <AiFillInstagram className="w-4 h-4 text-pink-500" />
                                                <span>{profile.redes?.Instagram}</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

