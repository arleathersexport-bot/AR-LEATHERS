import { useEffect, useRef, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Autoplay, Navigation } from "swiper/modules";
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiOutlineXMark, HiOutlineMagnifyingGlassPlus, HiOutlineCheckCircle, HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { products, getProductBySlug } from "../data/products";
import Reveal from "../components/Reveal";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightbox, setLightbox] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const thumbPrevRef = useRef(null);
  const thumbNextRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 pt-32">
        <p className="text-charcoal/60">Product not found.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  const idx = products.findIndex((p) => p.slug === slug);
  const prev = products[(idx - 1 + products.length) % products.length];
  const next = products[(idx + 1) % products.length];
  const related = products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, 3);
  const relatedFallback = related.length ? related : products.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-white2">
      <div className="container-x">
        <nav className="text-xs text-charcoal/50 font-alt flex items-center gap-2 mb-8">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <button onClick={() => navigate("/#products")} className="hover:text-gold">Products</button>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-14">
          {/* Gallery */}
          <Reveal>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-luxury" style={{ aspectRatio: "4 / 3" }}>
                <Swiper
                  modules={[Thumbs, Autoplay, Navigation]}
                  thumbs={{ swiper: thumbsSwiper }}
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  navigation={{ prevEl: prevBtnRef.current, nextEl: nextBtnRef.current }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevBtnRef.current;
                    swiper.params.navigation.nextEl = nextBtnRef.current;
                  }}
                  observer
                  observeParents
                  onSlideChange={(s) => setActiveIndex(s.realIndex)}
                  className="group/gallery w-full h-full"
                >
                  {product.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative w-full h-full group cursor-zoom-in" onClick={() => setLightbox(true)}>
                        <img
                          src={img}
                          alt={`${product.name} ${i + 1}`}
                          loading={i === 0 ? "eager" : "lazy"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white2/80 backdrop-blur flex items-center justify-center text-cocoa opacity-0 group-hover:opacity-100 transition-opacity">
                          <HiOutlineMagnifyingGlassPlus />
                        </span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {product.images.length > 1 && (
                  <>
                    <button
                      ref={prevBtnRef}
                      aria-label="Previous image"
                      className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white2/90 backdrop-blur flex items-center justify-center text-cocoa shadow-luxury transition-all duration-300 hover:bg-gold hover:text-white2 hover:scale-110"
                    >
                      <HiChevronLeft className="text-xl" />
                    </button>
                    <button
                      ref={nextBtnRef}
                      aria-label="Next image"
                      className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white2/90 backdrop-blur flex items-center justify-center text-cocoa shadow-luxury transition-all duration-300 hover:bg-gold hover:text-white2 hover:scale-110"
                    >
                      <HiChevronRight className="text-xl" />
                    </button>

                    {/* Image counter */}
                    <span className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-full bg-charcoal/60 backdrop-blur text-white2 text-xs font-alt tracking-wide">
                      {activeIndex + 1} / {product.images.length}
                    </span>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="relative mt-4 px-8">
                  <Swiper
                    modules={[Navigation]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3.4}
                    breakpoints={{
                      480: { slidesPerView: 4.2 },
                      768: { slidesPerView: 4.4 },
                    }}
                    watchSlidesProgress
                    navigation={{ prevEl: thumbPrevRef.current, nextEl: thumbNextRef.current }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl = thumbPrevRef.current;
                      swiper.params.navigation.nextEl = thumbNextRef.current;
                    }}
                    observer
                    observeParents
                    className="!px-0.5"
                  >
                    {product.images.map((img, i) => (
                      <SwiperSlide key={i} className="cursor-pointer">
                        <div
                          className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-colors ${activeIndex === i ? "border-gold" : "border-transparent"}`}
                        >
                          <img src={img} alt={`thumb ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <button
                    ref={thumbPrevRef}
                    aria-label="Scroll thumbnails left"
                    className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white2 shadow-luxury items-center justify-center text-cocoa hover:bg-gold hover:text-white2 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <HiChevronLeft className="text-sm" />
                  </button>
                  <button
                    ref={thumbNextRef}
                    aria-label="Scroll thumbnails right"
                    className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white2 shadow-luxury items-center justify-center text-cocoa hover:bg-gold hover:text-white2 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <HiChevronRight className="text-sm" />
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <div>
            <Reveal>
              <span className="eyebrow">{product.category}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading-serif text-4xl md:text-[2.75rem] mt-5">{product.name}</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-gold font-alt mt-2">{product.tagline}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-charcoal/65 leading-relaxed mt-6">{product.overview}</p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8">
                <h3 className="font-display text-lg text-charcoal mb-3">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-charcoal/65">
                      <HiOutlineCheckCircle className="text-gold shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span key={a} className="text-xs px-3 py-1.5 rounded-full bg-cream text-cocoa font-alt">{a}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <a href="#inquiry" onClick={(e) => { e.preventDefault(); document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary mt-9">
                Request a Quote <HiOutlineArrowRight />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Specifications */}
        <Reveal>
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="font-display text-2xl text-charcoal mb-5">Specifications</h3>
              <div className="rounded-2xl overflow-hidden border border-cocoa/10">
                {product.specs.map((s, i) => (
                  <div key={s.label} className={`flex justify-between px-6 py-4 text-sm ${i % 2 === 0 ? "bg-cream/40" : "bg-white2"}`}>
                    <span className="text-charcoal/50 font-alt">{s.label}</span>
                    <span className="text-charcoal font-medium text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl text-charcoal mb-5">Export Information</h3>
              <div className="bg-cocoa rounded-2xl p-8 text-cream/80 leading-relaxed h-full">
                <p>{product.exportInfo}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Inquiry CTA */}
        <Reveal>
          <div id="inquiry" className="mt-20 bg-gradient-to-br from-cream to-camel/40 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cocoa">Interested in {product.name}?</h3>
              <p className="text-cocoa/60 mt-2">Send us your requirement and our export team will respond with pricing and lead time.</p>
            </div>
            <button
              onClick={() => navigate("/#contact")}
              className="btn-primary shrink-0"
            >
              Send Inquiry <HiOutlineArrowRight />
            </button>
          </div>
        </Reveal>

        {/* Prev / Next */}
        <div className="mt-16 flex items-center justify-between border-t border-cocoa/10 pt-8">
          <Link to={`/products/${prev.slug}`} className="flex items-center gap-3 group max-w-[45%]">
            <HiOutlineArrowLeft className="text-cocoa group-hover:-translate-x-1 transition-transform" />
            <div>
              <p className="text-[10px] uppercase tracking-wide text-charcoal/40 font-alt">Previous</p>
              <p className="font-display text-charcoal group-hover:text-gold transition-colors truncate">{prev.name}</p>
            </div>
          </Link>
          <Link to={`/products/${next.slug}`} className="flex items-center gap-3 group text-right max-w-[45%] justify-end">
            <div>
              <p className="text-[10px] uppercase tracking-wide text-charcoal/40 font-alt">Next</p>
              <p className="font-display text-charcoal group-hover:text-gold transition-colors truncate">{next.name}</p>
            </div>
            <HiOutlineArrowRight className="text-cocoa group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Related products */}
        <div className="mt-20">
          <h3 className="font-display text-2xl text-charcoal mb-8">Related Products</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {relatedFallback.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group block bg-gray2 rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-charcoal group-hover:text-gold transition-colors">{p.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[90] bg-cocoa/90 backdrop-blur-md flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(false)}
          >
            <motion.img
              src={product.images[activeIndex]}
              alt={product.name}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-luxury"
            />
            <button className="absolute top-6 right-6 text-white2 text-3xl" onClick={() => setLightbox(false)}>
              <HiOutlineXMark />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}