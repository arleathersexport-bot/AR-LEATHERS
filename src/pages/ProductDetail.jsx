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
    <div className="pt-28 pb-24 bg-white2 min-h-screen">
      <div className="container-x">
        <nav className="text-xs text-charcoal/50 font-alt flex items-center gap-2 mb-6 md:mb-8 overflow-x-auto">
          <Link to="/" className="hover:text-gold whitespace-nowrap">Home</Link>
          <span className="whitespace-nowrap">/</span>
          <button onClick={() => navigate("/#products")} className="hover:text-gold whitespace-nowrap">Products</button>
          <span className="whitespace-nowrap">/</span>
          <span className="text-charcoal whitespace-nowrap truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14">
          {/* Gallery */}
          <Reveal>
            <div className="relative w-full">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-luxury" style={{ aspectRatio: "4 / 3" }}>
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
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-11 md:h-11 rounded-full bg-white2/90 backdrop-blur flex items-center justify-center text-cocoa shadow-luxury transition-all duration-300 hover:bg-gold hover:text-white2 hover:scale-110"
                    >
                      <HiChevronLeft className="text-lg md:text-xl" />
                    </button>
                    <button
                      ref={nextBtnRef}
                      aria-label="Next image"
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-11 md:h-11 rounded-full bg-white2/90 backdrop-blur flex items-center justify-center text-cocoa shadow-luxury transition-all duration-300 hover:bg-gold hover:text-white2 hover:scale-110"
                    >
                      <HiChevronRight className="text-lg md:text-xl" />
                    </button>

                    {/* Image counter */}
                    <span className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-10 px-2.5 py-1 text-[10px] md:text-xs rounded-full bg-charcoal/60 backdrop-blur text-white2 font-alt tracking-wide">
                      {activeIndex + 1} / {product.images.length}
                    </span>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="relative mt-3 md:mt-4 px-6 md:px-8">
                  <Swiper
                    modules={[Navigation]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={8}
                    slidesPerView={3.2}
                    breakpoints={{
                      375: { slidesPerView: 3.4 },
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
                    className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white2 shadow-luxury items-center justify-center text-cocoa hover:bg-gold hover:text-white2 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <HiChevronLeft className="text-xs md:text-sm" />
                  </button>
                  <button
                    ref={thumbNextRef}
                    aria-label="Scroll thumbnails right"
                    className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white2 shadow-luxury items-center justify-center text-cocoa hover:bg-gold hover:text-white2 transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  >
                    <HiChevronRight className="text-xs md:text-sm" />
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* Info */}
          <div className="mt-8 lg:mt-0">
            <Reveal>
              <span className="eyebrow text-xs md:text-sm">{product.category}</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading-serif text-3xl md:text-4xl lg:text-[2.75rem] mt-3 md:mt-5">{product.name}</h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-gold font-alt text-sm md:text-base mt-2">{product.tagline}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-charcoal/65 leading-relaxed text-sm md:text-base mt-4 md:mt-6">{product.overview}</p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-6 md:mt-8">
                <h3 className="font-display text-base md:text-lg text-charcoal mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-charcoal/65">
                      <HiOutlineCheckCircle className="text-gold shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-6 md:mt-8 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span key={a} className="text-[10px] md:text-xs px-2.5 md:px-3 py-1 md:py-1.5 rounded-full bg-cream text-cocoa font-alt">{a}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <a href="#inquiry" onClick={(e) => { e.preventDefault(); document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary mt-6 md:mt-9 inline-block">
                Request a Quote <HiOutlineArrowRight />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Specifications */}
        <Reveal>
          <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-charcoal mb-4 md:mb-5">Specifications</h3>
              <div className="rounded-2xl overflow-hidden border border-cocoa/10">
                {product.specs.map((s, i) => (
                  <div key={s.label} className={`flex flex-col md:flex-row md:justify-between px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm gap-2 md:gap-0 ${i % 2 === 0 ? "bg-cream/40" : "bg-white2"}`}>
                    <span className="text-charcoal/50 font-alt">{s.label}</span>
                    <span className="text-charcoal font-medium text-right md:text-right">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-charcoal mb-4 md:mb-5">Export Information</h3>
              <div className="bg-cocoa rounded-2xl p-6 md:p-8 text-cream/80 leading-relaxed text-sm md:text-base h-full">
                <p>{product.exportInfo}</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Inquiry CTA */}
        <Reveal>
          <div id="inquiry" className="mt-16 md:mt-20 bg-gradient-to-br from-cream to-camel/40 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            <div className="flex-1">
              <h3 className="font-display text-lg md:text-2xl lg:text-3xl text-cocoa">Interested in {product.name}?</h3>
              <p className="text-cocoa/60 text-sm md:text-base mt-1 md:mt-2 leading-relaxed">Send us your requirement and our export team will respond with pricing and lead time.</p>
            </div>
            <button
              onClick={() => navigate("/#contact")}
              className="btn-primary shrink-0 w-full md:w-auto"
            >
              Send Inquiry <HiOutlineArrowRight />
            </button>
          </div>
        </Reveal>

        {/* Prev / Next */}
        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border-t border-cocoa/10 pt-6 md:pt-8">
          <Link to={`/products/${prev.slug}`} className="flex items-start md:items-center gap-2 md:gap-3 group w-full md:w-auto md:max-w-[45%]">
            <HiOutlineArrowLeft className="text-cocoa group-hover:-translate-x-1 transition-transform shrink-0 mt-1 md:mt-0" />
            <div className="min-w-0">
              <p className="text-[9px] md:text-[10px] uppercase tracking-wide text-charcoal/40 font-alt">Previous</p>
              <p className="font-display text-xs md:text-base text-charcoal group-hover:text-gold transition-colors truncate">{prev.name}</p>
            </div>
          </Link>
          <Link to={`/products/${next.slug}`} className="flex items-start md:items-center gap-2 md:gap-3 group text-right w-full md:w-auto md:max-w-[45%] md:justify-end">
            <div className="min-w-0">
              <p className="text-[9px] md:text-[10px] uppercase tracking-wide text-charcoal/40 font-alt">Next</p>
              <p className="font-display text-xs md:text-base text-charcoal group-hover:text-gold transition-colors truncate">{next.name}</p>
            </div>
            <HiOutlineArrowRight className="text-cocoa group-hover:translate-x-1 transition-transform shrink-0 mt-1 md:mt-0" />
          </Link>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-20">
          <h3 className="font-display text-xl md:text-2xl text-charcoal mb-6 md:mb-8">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {relatedFallback.map((p) => (
              <Link key={p.slug} to={`/products/${p.slug}`} className="group block bg-gray2 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-luxury transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-3 md:p-5">
                  <h4 className="font-display text-sm md:text-base text-charcoal group-hover:text-gold transition-colors line-clamp-2">{p.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[90] bg-cocoa/90 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
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
              className="max-h-[90vh] md:max-h-[85vh] max-w-full rounded-xl md:rounded-2xl shadow-luxury"
            />
            <button className="absolute top-3 md:top-6 right-3 md:right-6 text-white2 text-2xl md:text-3xl hover:scale-110 transition-transform" onClick={() => setLightbox(false)}>
              <HiOutlineXMark />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}