import { motion } from "framer-motion";
import * as ReactCountUp from "react-countup";
const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;
import { useInView } from "react-intersection-observer";
import Reveal from "./Reveal";

const countries = [
  "Turkey", "China", "Italy", "Vietnam", "Bangladesh",
  "Canada", "USA", "Egypt", "UAE", "Europe", "Middle East", "South Asia",
];

const radius = 40;
const nodes = countries.map((c, i) => {
  const angle = (i / countries.length) * Math.PI * 2 - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle) * 0.82;

  // Determine label placement so text never overlaps its own node dot
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  let anchor = "middle";
  if (cos > 0.3) anchor = "start";
  else if (cos < -0.3) anchor = "end";

  const labelOffsetY = sin > 0.3 ? 14 : sin < -0.3 ? -14 : 4;
  const labelOffsetX = anchor === "start" ? 8 : anchor === "end" ? -8 : 0;

  return { name: c, x, y, anchor, labelOffsetX, labelOffsetY };
});

const stats = [
  { value: 10, suffix: "+", label: "Export Countries" },
  { value: 300, suffix: "+", label: "Shipments Delivered" },
  { value: 100, suffix: "%", label: "On-Time Documentation" },
];

export default function GlobalExport() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="global" className="section-pad leather-tan relative overflow-hidden">
      <div className="grain-overlay" />
      <div className="container-x relative grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Reveal><span className="eyebrow">Global Export Network</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-cocoa text-4xl md:text-[2.75rem] mt-5">
              India to the World
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cocoa/60 mt-5 leading-relaxed max-w-md">
              AR LEATHERS proudly serves buyers across major international markets,
              with a dedicated export team managing documentation and logistics
              from origin to destination port.
            </p>
          </Reveal>

          <div ref={ref} className="grid grid-cols-3 gap-6 mt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.25 + i * 0.08}>
                <div>
                  <div className="font-display text-3xl text-gold">
                    {inView && <CountUp end={s.value} duration={2.2} />}
                    {s.suffix}
                  </div>
                  <div className="text-cocoa/50 text-xs mt-1 uppercase tracking-wide font-alt">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2 mt-10">
              {countries.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="text-xs px-3 py-1.5 rounded-full border border-cocoa/20 text-cocoa/70 font-alt bg-white2/70 hover:bg-gold hover:text-white2 hover:border-gold transition-colors duration-300 cursor-default"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="relative aspect-square max-w-lg mx-auto overflow-visible">
            <svg viewBox="-15 -5 130 110" className="w-full h-full">
              {/* subtle rotating outer ring for ambient motion */}
              <motion.circle
                cx="50" cy="50" r="46"
                fill="none"
                stroke="#B68C45"
                strokeWidth="0.15"
                strokeDasharray="0.5 2.5"
                opacity="0.35"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50px 50px" }}
              />

              {nodes.map((n, i) => (
                <motion.line
                  key={n.name}
                  x1="50" y1="50" x2={n.x} y2={n.y}
                  stroke="#B68C45"
                  strokeWidth="0.3"
                  strokeDasharray="1.5 1.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.55 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.08, ease: "easeInOut" }}
                />
              ))}

              {/* traveling pulse along each line to suggest shipments in motion */}
              {nodes.map((n, i) => (
                <motion.circle
                  key={`pulse-${n.name}`}
                  cx="50"
                  cy="50"
                  r="0.9"
                  fill="#B68C45"
                  initial={{ opacity: 0 }}
                  animate={{
                    cx: [50, n.x],
                    cy: [50, n.y],
                    opacity: [0, 0.9, 0],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    delay: 1.4 + i * 0.35,
                    ease: "easeInOut",
                  }}
                />
              ))}

              <motion.circle
                cx="50" cy="50" r="9"
                fill="none"
                stroke="#B68C45"
                strokeWidth="0.3"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.6, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "50px 50px" }}
              />
              <circle cx="50" cy="50" r="6.5" fill="#B68C45" />

              {nodes.map((n, i) => (
                <motion.circle
                  key={n.name}
                  cx={n.x} cy={n.y} r="1.8"
                  fill="#34271F"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.08, ease: "backOut" }}
                  whileHover={{ scale: 1.6, fill: "#B68C45" }}
                  style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                />
              ))}

              {nodes.map((n, i) => (
                <motion.text
                  key={`label-${n.name}`}
                  x={n.x + n.labelOffsetX}
                  y={n.y + n.labelOffsetY}
                  textAnchor={n.anchor}
                  fontSize="3.1"
                  fill="#34271F"
                  fillOpacity="0.75"
                  fontFamily="Poppins, sans-serif"
                  fontWeight="500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 + i * 0.08 }}
                >
                  {n.name}
                </motion.text>
              ))}
            </svg>

            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-alt font-semibold text-sandalwood bg-gold px-3 py-1.5 rounded-full whitespace-nowrap shadow-luxury"
            >
              INDIA
            </motion.span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}