import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    useEffect(() => {
        if (location.pathname === "/" && location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    const menuItems = [
        { label: "Inicio", href: "#inicio" },
        { label: "¿Quiénes Somos?", href: "#quienes-somos" },
        { label: "Servicios", href: "#servicios" },
        { label: "Colaboradores", href: "#colaboradores" },
        { label: "Contacto", href: "#contacto" },
    ];

    function handleAnchorClick(href) {
        const id = href.replace("#", "");
        if (location.pathname !== "/") {
            navigate(`/#${id}`);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setMenuOpen(false);
    }

    return (
        <>

            <style>{`
        @media (min-width: 769px) {
          .custom-md-hidden {
            display: none !important;
          }
          .custom-md-flex {
            display: flex !important;
          }
        }
      `}</style>

            <header className="sticky top-0 z-[9999] w-full py-3 px-4 md:px-6 font-Montserrat bg-gray-950">
                <div className="container flex h-14 items-center justify-between p-4 md:p-6 min-w-0">
                    <>
                        <style>{`
              @keyframes shine {
                0% { background-position: -200% 0; }
                100% { background-position: 200% 0; }
              }
              .shine-text {
                background: linear-gradient(90deg, #fbbf24, #f97316, #fbbf24);
                background-size: 200% 100%;
                background-clip: text;
                -webkit-background-clip: text;
                color: transparent;
                -webkit-text-fill-color: transparent;
                animation: shine 2.5s infinite;
              }
            `}</style>

                        <Link
                            to="/"
                            className="flex items-center gap-2 font-semibold rounded-sm min-w-0 truncate px-3 py-2 select-none shine-text"
                            onClick={() => setMenuOpen(false)}
                        >
                            Forwards Studios
                        </Link>
                    </>


                    <nav className="hidden custom-md-flex items-center gap-6 text-sm font-medium min-w-0">
                        {menuItems.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                className="animated-underline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleAnchorClick(href);
                                }}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>


                    <button
                        className="flex flex-col justify-center items-center gap-[6px] w-8 h-8 cursor-pointer z-50 custom-md-hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={menuOpen}
                        type="button"
                    >
                        <span
                            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-full bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>


                <nav
                    className={`fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-base sm:text-lg font-medium text-white transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"
                        } custom-md-hidden`}
                >
                    {menuItems.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="px-6 py-3 hover:text-purple-400 rounded-sm select-none"
                            onClick={(e) => {
                                e.preventDefault();
                                handleAnchorClick(href);
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </header>
        </>
    );
}
