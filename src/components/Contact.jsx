import { useState } from "react";
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePaperAirplane } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-sandalwood">
      <div className="container-x grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <Reveal><span className="eyebrow">Contact Us</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5">
              Let&rsquo;s Start a Partnership
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-charcoal/60 mt-5 leading-relaxed max-w-md">
              Reach out for pricing, samples, or export documentation. Our team
              typically responds within one business day.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            <Reveal delay={0.25}>
              <a href="tel:+910000000000" className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-camel/40 flex items-center justify-center text-cocoa text-xl group-hover:bg-gold group-hover:text-white2 transition-colors">
                  <HiOutlinePhone />
                </span>
                <div>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide font-alt">Phone</p>
                  <p className="font-alt text-charcoal">+91 7871777608</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="mailto:info@arleathers.com" className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full bg-camel/40 flex items-center justify-center text-cocoa text-xl group-hover:bg-gold group-hover:text-white2 transition-colors">
                  <HiOutlineEnvelope />
                </span>
                <div>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide font-alt">Email</p>
                  <p className="font-alt text-charcoal">arleathergoods27@gmail.com</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-camel/40 flex items-center justify-center text-cocoa text-xl">
                  <HiOutlineMapPin />
                </span>
                <div>
                  <p className="text-xs text-charcoal/50 uppercase tracking-wide font-alt">Location</p>
                  <p className="font-alt text-charcoal">India</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <a
                href="https://wa.me/918922010767"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-sm font-alt font-medium text-gold hover:text-cocoa transition-colors"
              >
                <FaWhatsapp className="text-lg" /> Chat with us on WhatsApp
              </a>
            </Reveal>
          </div>

          
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} className="card-glass rounded-3xl p-8 md:p-10">
            <h3 className="font-display text-2xl text-charcoal mb-1">Export Inquiry</h3>
            <p className="text-charcoal/50 text-sm mb-8">Tell us what you're looking for and we'll get back with a quote.</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label className="text-xs uppercase tracking-wide text-charcoal/50 font-alt">Full Name</label>
                <input required type="text" className="mt-2 w-full bg-white2 border border-cocoa/15 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs uppercase tracking-wide text-charcoal/50 font-alt">Company</label>
                <input type="text" className="mt-2 w-full bg-white2 border border-cocoa/15 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs uppercase tracking-wide text-charcoal/50 font-alt">Email</label>
                <input required type="email" className="mt-2 w-full bg-white2 border border-cocoa/15 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-xs uppercase tracking-wide text-charcoal/50 font-alt">Country</label>
                <input type="text" className="mt-2 w-full bg-white2 border border-cocoa/15 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wide text-charcoal/50 font-alt">Product of Interest</label>
                <input type="text" placeholder="e.g. Wet Blue Leather, Raw Cow Hides" className="mt-2 w-full bg-white2 border border-cocoa/15 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wide text-charcoal/50 font-alt">Message</label>
                <textarea rows={4} className="mt-2 w-full bg-white2 border border-cocoa/15 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors resize-none" />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full mt-7">
              {sent ? "Inquiry Sent" : "Send Inquiry"} <HiOutlinePaperAirplane className="rotate-45" />
            </button>
            {sent && <p className="text-xs text-gold mt-3 text-center">Thank you — our export team will contact you shortly.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
