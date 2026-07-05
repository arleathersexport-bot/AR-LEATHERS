import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import logo from "../assets/navbar.png";
import { products } from "../data/products";

const countries = [
  "Turkey",
  "China",
  "Italy",
  "Vietnam",
  "Bangladesh",
  "Canada",
  "USA",
  "Egypt",
  "UAE",
  "Europe",
];

// Replace these URLs with your actual social media links
const socialLinks = [
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/arleathersexport?utm_source=qr",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.facebook.com/share/1EuaNU8WLH/?mibextid=wwXIfr",
  },
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/share/1EuaNU8WLH/?mibextid=wwXIfr",
  },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="pt-20 pb-8 relative overflow-hidden"
      style={{ backgroundColor: "#34271F" }}
    >
      <div className="grain-overlay" />

      {/* Subtle warm gradient at top of footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-camel to-gold opacity-60" />

      <div className="container-x relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-14">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="AR Leathers"
              className="h-12 brightness-0 invert opacity-85 mb-5"
            />

            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(238,226,209,0.55)" }}
            >
              Premium Raw Hides & Skins Exporter from India. Quality you can
              trust, delivered worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
                  style={{
                    borderColor: "rgba(238,226,209,0.15)",
                    color: "rgba(238,226,209,0.6)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#B68C45";
                    e.currentTarget.style.borderColor = "#B68C45";
                    e.currentTarget.style.color = "#34271F";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor =
                      "rgba(238,226,209,0.15)";
                    e.currentTarget.style.color =
                      "rgba(238,226,209,0.6)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display text-lg mb-4"
              style={{ color: "#EEE2D1" }}
            >
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Products", "products"],
                ["Process", "process"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="transition-colors"
                    style={{ color: "rgba(238,226,209,0.55)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#B68C45")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(238,226,209,0.55)")
                    }
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4
              className="font-display text-lg mb-4"
              style={{ color: "#EEE2D1" }}
            >
              Products
            </h4>

            <ul className="space-y-2 text-sm">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="transition-colors"
                    style={{ color: "rgba(238,226,209,0.55)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#B68C45")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "rgba(238,226,209,0.55)")
                    }
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Countries */}
          <div>
            <h4
              className="font-display text-lg mb-4"
              style={{ color: "#EEE2D1" }}
            >
              Export Countries
            </h4>

            <div className="flex flex-wrap gap-2 text-xs">
              {countries.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 rounded-full"
                  style={{
                    border: "1px solid rgba(238,226,209,0.12)",
                    color: "rgba(238,226,209,0.45)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="stitch-line opacity-25 mb-6" />

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "rgba(238,226,209,0.35)" }}
        >
          <p>© {new Date().getFullYear()} AR LEATHERS. All rights reserved.</p>
          <p>Designed with heritage & craftsmanship in mind.</p>
        </div>
      </div>
    </footer>
  );
}