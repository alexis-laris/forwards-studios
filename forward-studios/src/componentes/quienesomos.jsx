import "../helpers/About.css";

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion";
import { Lightbulb, TrendingUp, Headphones, Target, BarChart, Rocket } from "lucide-react"
import { useRef } from "react";

export default function QuienesSomos() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="flex min-h-screen flex-col xl:flex-row font-m" ref={ref} id="quienes-somos">

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-1 items-center justify-center bg-gray-100 p-8 text-gray-900 md:p-12 lg:p-16"
            >
                <div className="max-w-md space-y-6 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
                        className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-Montserrat bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent mb-6 sm:mb-8 md:whitespace-nowrap whitespace-normal"
                    >
                        ¿Quiénes <span className="italic font-times">Sómos?</span>
                        <span className="text-black text-opacity-100 ml-2">📌</span>
                    </motion.h2>



                    {[
                        "¡Hola! Somos expertos en marketing digital. Elevamos tu marca con creatividad y campañas que funcionan.",
                        "Nos enfocamos en resultados y en darte la mejor atención.",
                        "Únete y logra el éxito digital con nosotros.",
                    ].map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + i * 0.25, ease: "easeOut" }}
                            className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 font-Montserrat max-w-3xl mx-auto md:mx-0 italic"
                        >
                            {text}
                        </motion.p>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 1.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 font-Montserrat mb-16 px-2 sm:px-0 md:justify-start"
                    >
                        <Button className="px-8 sm:px-10 py-4 text-base rounded-full bg-[#4E1AD7] hover:bg-purple-700 cursor-pointer font-normal transition-all duration-200 min-w-[160px]">
                            <a href="#contacto">Contáctanos</a>
                        </Button>


                    </motion.div>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-1 items-center justify-center bg-gray-950 p-6 sm:p-8 md:p-12 lg:p-16 text-white"
            >
                <div className="max-w-4xl w-full space-y-8 text-center md:text-left px-4 sm:px-6">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight font-Montserrat bg-gradient-to-r from-white via-gray-300 to-gray-300 bg-clip-text text-transparent mb-6 sm:mb-8 text-center"
                    >
                        Nuestra <span className="italic font-times">Esencia</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-Montserrat"
                    >
                        {[
                            { Icon: Lightbulb, title: "Creatividad", text: "Campañas que destacan", color: "purple", textColor: "text-purple-400", borderColor: "border-purple-600", descColor: "text-purple-300" },
                            { Icon: TrendingUp, title: "Resultados", text: "Crecimiento real", color: "blue", textColor: "text-blue-400", borderColor: "border-blue-600", descColor: "text-blue-300" },
                            { Icon: Headphones, title: "Atención", text: "Respuestas rápidas", color: "green", textColor: "text-green-400", borderColor: "border-green-600", descColor: "text-green-300" },
                            { Icon: Target, title: "Estrategia", text: "Planeación a medida", color: "orange", textColor: "text-orange-400", borderColor: "border-orange-600", descColor: "text-orange-300" },
                            { Icon: BarChart, title: "Análisis", text: "Decisiones con datos", color: "red", textColor: "text-red-400", borderColor: "border-red-600", descColor: "text-red-300" },
                            { Icon: Rocket, title: "Innovación", text: "Ideas frescas cada día", color: "pink", textColor: "text-pink-400", borderColor: "border-pink-600", descColor: "text-pink-300" },
                        ].map(({ Icon, title, text, textColor, borderColor, descColor }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                                whileHover={{ scale: 1.05 }}
                                className={`rounded-lg border-2 ${borderColor} p-5 text-white bg-transparent cursor-pointer transition-all duration-300`}
                            >
                                <Icon className={`mb-3 w-10 h-10 sm:w-12 sm:h-12 ${textColor}`} />
                                <h3 className={`text-xl font-semibold ${textColor}`}>{title}</h3>
                                <p className={`mt-2 ${descColor}`}>{text}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
                        className="bg-gray-900 p-8 rounded-xl shadow-lg"
                    >
                        <div className="flex flex-col sm:flex-row justify-center gap-12 sm:gap-20 font-Montserrat text-white text-center">
                            {[
                                {
                                    icon: <Lightbulb className="mx-auto mb-2 w-10 h-10 text-white" />,
                                    number: '+900M',
                                    label: 'Visitas generadas',
                                },
                                {
                                    icon: <TrendingUp className="mx-auto mb-2 w-10 h-10 text-white" />,
                                    number: '+50',
                                    label: 'Proyectos Exitosos',
                                },
                                {
                                    icon: <Rocket className="mx-auto mb-2 w-10 h-10 text-white" />,
                                    number: '+100',
                                    label: 'Influencers Satisfechos',
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 1.5 + index * 0.25, ease: "easeOut" }}
                                    className="cursor-pointer transition-all duration-300 hover:scale-110 hover:brightness-125 group"
                                >
                                    {item.icon}
                                    <p className="text-5xl font-extrabold shimmer-text group-hover:text-indigo-400 transition-colors duration-300">
                                        {item.number}
                                    </p>
                                    <p className="text-sm mt-1 opacity-90 group-hover:opacity-100">{item.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
