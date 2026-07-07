import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import logo from "../assets/navbar.png";

const links = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Products", to: "products" },
  { label: "Services", to: "services" },
  { label: "Process", to: "process" },
  { label: "Global Reach", to: "global" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-lux ${
          scrolled
            ? "bg-sandalwood/90 backdrop-blur-xl shadow-soft py-2 md:py-3"
            : "bg-sandalwood/60 backdrop-blur-sm py-4 md:py-6"
        }`}
      >
        <nav className="container-x flex items-center justify-between px-4 sm:px-6 md:px-0">
          {/* Logo Section */}
          <button onClick={() => goTo("home")} className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            <img src={logo} alt="AR" className="h-8 sm:h-9 md:h-12 w-auto" />
            <span className="hidden sm:inline text-xs sm:text-sm md:text-base font-alt font-medium text-cocoa tracking-wider">
              Leathers
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-9 flex-1 justify-center">
            {links.map((l) => (
              <button
                key={l.to}
                onClick={() => goTo(l.to)}
                className="text-xs xl:text-sm tracking-[0.12em] uppercase font-alt font-medium text-cocoa hover:text-gold transition-colors duration-300 whitespace-nowrap"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button 
            onClick={() => goTo("contact")} 
            className="hidden lg:inline-flex btn-primary !py-2.5 xl:!py-3 !px-5 xl:!px-6 text-xs xl:text-sm gap-2 items-center shrink-0 ml-6"
          >
            Get a Quote <HiOutlineArrowRight className="text-sm" />
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-cocoa text-xl sm:text-2xl shrink-0 ml-auto" 
            onClick={() => setOpen(true)} 
            aria-label="Open menu"
          >
            <HiOutlineMenu />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#DDC5A2" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between container-x px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 border-b border-cocoa/10">
              <div className="flex items-center gap-2">
                <img src={logo} alt="AR" className="h-9 sm:h-10 w-auto" />
                <span className="text-sm sm:text-base font-alt font-medium text-cocoa tracking-wider">
                  Leathers
                </span>
              </div>
              <button 
                className="text-cocoa text-2xl sm:text-3xl p-1" 
                onClick={() => setOpen(false)} 
                aria-label="Close menu"
              >
                <HiOutlineX />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col items-start justify-start gap-1 container-x px-4 sm:px-6 pt-6 sm:pt-8 pb-24">
              {links.map((l, i) => (
                <motion.button
                  key={l.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  onClick={() => goTo(l.to)}
                  className="text-lg sm:text-2xl md:text-3xl font-display text-cocoa hover:text-gold transition-colors duration-300 w-full text-left py-2 sm:py-3 hover:pl-2 transition-all"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-sandalwood to-sandalwood/80 backdrop-blur px-4 sm:px-6 py-4 sm:py-6 border-t border-cocoa/10">
              <button
                onClick={() => goTo("contact")}
                className="btn-primary w-full py-3 sm:py-4 px-6 text-sm sm:text-base flex items-center justify-center gap-2 font-medium"
              >
                Get a Quote <HiOutlineArrowRight className="text-base sm:text-lg" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}