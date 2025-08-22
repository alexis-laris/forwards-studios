import Inicio from "./componentes/inicio";
import QuienesSomos from "./componentes/quienesomos";
import Servicios from "./componentes/servicios";
import Colaboradores from "./componentes/colaboradores";
import Contacto from "./componentes/contacto";

import ScrollToTop from "./componentes/scrollototop";
import WhatsappButton from "./componentes/whatsppabutton";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-950 relative">

            <Inicio />
            <QuienesSomos />
            <Servicios />
            <Colaboradores />
            <Contacto />


            <WhatsappButton />
            <ScrollToTop />
        </div>
    );
}
