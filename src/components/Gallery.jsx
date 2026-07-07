import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineXMark, HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import Reveal from "./Reveal";
import sample from "../assets/sample-product.jpg";
import cowCalfHide from "../assets/Product1/Image1.jpeg";


const categories = ["All", "Finished Leather", "Wet Blue Leather", "Crust Leather", "Raw Hides", "Manufacturing", "Exports"];

const images = [
  { src: cowCalfHide, cat: "Raw Hides", tall: true, label: "Cow Calf Raw Salted Hides" },
  { src: sample, cat: "Finished Leather", tall: true },
  { src: sample, cat: "Wet Blue Leather" },
  { src: sample, cat: "Raw Hides", tall: true },
  { src: sample, cat: "Crust Leather" },
  { src: sample, cat: "Manufacturing" },
  { src: sample, cat: "Exports", tall: true },
  { src: sample, cat: "Raw Hides" },
  { src: sample, cat: "Finished Leather" },
  { src: sample, cat: "Manufacturing", tall: true },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === "All" ? images : images.filter((i) => i.cat === active);

  return (
    <section className="section-pad bg-camel/20">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal><span className="eyebrow mx-auto before:hidden justify-center">Product Gallery</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5">
              A Look Inside AR Leathers
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wide font-alt font-medium transition-all duration-300 ${
                  active === c ? "bg-cocoa text-white2" : "bg-sandalwood text-cocoa/60 hover:bg-camel/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="columns-2 md:columns-3 gap-5 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                layout
                key={img.cat + i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`mb-5 break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                onClick={() => setLightbox(img)}
              >
                <img src={img.src} alt={img.cat} className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-110" />
                <div className="absolute inset-0 bg-cocoa/0 group-hover:bg-cocoa/50 transition-colors duration-400 flex items-center justify-center">
                  <HiOutlineMagnifyingGlassPlus className="text-white2 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
                <span className="absolute bottom-3 left-3 text-white2 text-xs uppercase tracking-wide font-alt bg-cocoa/60 backdrop-blur px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  {img.label || img.cat}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[90] bg-cocoa/90 backdrop-blur-md flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.src}
              alt={lightbox.cat}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-luxury"
            />
            <button className="absolute top-6 right-6 text-white2 text-3xl" onClick={() => setLightbox(null)}>
              <HiOutlineXMark />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}