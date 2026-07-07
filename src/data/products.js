import sample from "../assets/sample-product.jpg";
import product1Image1 from "../assets/Product1/Image1.jpeg";
import product1Image2 from "../assets/Product1/Image2.jpeg";
import product1Image3 from "../assets/Product1/Image3.jpeg";
import product1Image4 from "../assets/Product1/Image4.jpeg";
import product1Image5 from "../assets/Product1/Image5.jpeg";
import product1Image6 from "../assets/Product1/Image6.jpeg";
import product1Image7 from "../assets/Product1/Image7.jpeg";
import product1Image8 from "../assets/Product1/Image8.jpeg";
import product2Image1 from "../assets/Product2/Image1.jpeg";
import product2Image2 from "../assets/Product2/Image2.jpeg";
import product2Image3 from "../assets/Product2/Image3.jpeg";
import product2Image4 from "../assets/Product2/Image4.jpeg";
import product2Image5 from "../assets/Product2/Image5.jpeg";
import product2Image6 from "../assets/Product2/Image6.jpeg";
import product2Image7 from "../assets/Product2/Image7.jpeg";
import product3Image1 from "../assets/Product3/Image1.jpeg";
import product3Image2 from "../assets/Product3/Image2.jpeg";
import product3Image3 from "../assets/Product3/Image3.jpeg";
import product3Image4 from "../assets/Product3/Image4.jpeg";
import product3Image5 from "../assets/Product3/Image5.jpeg";
import product3Image6 from "../assets/Product3/Image6.jpeg";

// NOTE: All products currently use the same sample image (x3) as placeholders.
// Replace the `images` array for each product with real photography when available.
const gallery = [sample, sample, sample];

const cowCalfHidesGallery = [
  product1Image1,
  product1Image2,
  product1Image3,
  product1Image4,
  product1Image5,
  product1Image6,
  product1Image7,
  product1Image8,
];

const buffaloOmasumGallery = [
  product2Image1,
  product2Image2,
  product2Image3,
  product2Image4,
  product2Image5,
  product2Image6,
  product2Image7,
];

const buffaloWetBlueGallery = [
  product3Image1,
  product3Image2,
  product3Image3,
  product3Image4,
  product3Image5,
  product3Image6,
];

export const products = [
  {
    slug: "cow-calf-raw-salted-hides",
    name: "Cow Calf Raw Salted Hides",
    category: "Raw Hides",
    tagline: "Trimmed calf hides suited for fur and double-face leather",
    images: cowCalfHidesGallery,
    overview:
      "Our Cow Calf Raw Salted Hides are sourced from calves 5–10 days old and properly trimmed to suit fur and double-face leather production. Each hide is checked for a clean, marked-free grain before being salted and preserved for long shelf life, making it a reliable raw material for tanneries and processors worldwide.",
    specs: [
      { label: "Type", value: "Cow Calf Raw Salted Hide" },
      { label: "Average Weight", value: "3 – 5 kgs" },
      { label: "Average Size", value: "4 – 10 sq ft" },
      { label: "Hide Age", value: "5 – 10 days old" },
      { label: "Curing", value: "Wet Salted, treated with bactericide & boric acid" },
      { label: "Mode of Shipment", value: "Reefer container, temperature-controlled" },
    ],
    features: [
      "Trimmed properly — best suited for fur and double-face leather",
      "No hair slip, no holes, no marks or grain-off",
      "Treated with bactericide and boric acid for long shelf life",
      "Shipped in reefer containers with proper temperature control",
    ],
    applications: ["Fur Leather", "Double-Face Leather", "Premium Leather Goods", "Garment Leather"],
    exportInfo: "Shipped via refrigerated (reefer) containers with controlled temperature to preserve hide quality in transit, along with full export documentation and grading certificates.",
  },
  {
    slug: "frozen-buffalo-omasum",
    name: "Frozen Buffalo Omasum (Salted / Dried Grade Mix)",
    category: "Commodity Exports",
    tagline: "Carefully selected and processed buffalo omasum for export markets",
    images: buffaloOmasumGallery,
    overview:
      "The product consists of carefully selected buffalo omasum processed under hygienic conditions and sorted according to commercial export grades. The omasum is clean, well-preserved, free from excessive contamination, and suitable for further processing by the buyer. Every hide is graded, inspected, and prepared to international export standards.",
    specs: [
      { label: "Product", value: "Frozen Buffalo Omasum (Salted / Dried Grade Mix)" },
      { label: "Container Size", value: "1 × 40 FT container" },
      { label: "Total Net Weight", value: "30,440 kg" },
      { label: "Number of Bags", value: "761 bags" },
      { label: "Weight per Bag", value: "40 kg net weight" },
      { label: "Grade Distribution", value: "AA (2.1%), A1 (17.9%), A (24.2%), B (36.1%), C (16.4%), R (3.3%)" },
    ],
    features: [
      "Natural buffalo omasum",
      "Clean and properly graded",
      "Uniform packing by grade",
      "Hygienically processed",
      "Suitable for export markets",
      "Packed in strong export bags",
    ],
    applications: ["Food Processing", "Export Markets", "Further Processing", "Commercial Applications"],
    exportInfo: "Shipped in specialized containers with proper temperature and moisture control, complete export documentation, and grading certificates. Available for FOB/CIF shipment from Indian ports with full phytosanitary compliance.",
  },
  {
    slug: "buffalo-wet-blue-hides",
    name: "Buffalo Wet Blue Hides (5% Chrome)",
    category: "Wet Blue Leather",
    tagline: "Heavy-duty chrome-tanned hides for premium leather production",
    images: buffaloWetBlueGallery,
    overview:
      "Our Buffalo Wet Blue Hides are chrome-tanned using 5% basic chromium sulfate, ensuring excellent fiber strength, durability, and uniform tanning quality. These hides are suitable for manufacturing heavy-duty leather products such as industrial leather, safety footwear, belts, saddlery, and premium upholstery.",
    specs: [
      { label: "Product", value: "Buffalo Wet Blue Hides" },
      { label: "Chrome Content", value: "5%" },
      { label: "Belly Thickness", value: "4.0 mm+" },
      { label: "Overall Average Thickness", value: "5.0 mm+" },
      { label: "Average Size", value: "40 sq. ft. and above" },
      { label: "Quality", value: "Clean grain, well-trimmed, uniformly tanned, carefully sorted" },
      { label: "Moisture", value: "Standard wet blue condition" },
      { label: "Origin", value: "India" },
    ],
    features: [
      "5% chromium sulfate tanning for durability",
      "Heavy-duty thickness (4.0-5.0 mm+)",
      "Large size hides (40 sq ft+)",
      "Clean grain and excellent uniformity",
      "Ideal for industrial and premium leather",
      "Carefully sorted and quality-assured",
    ],
    applications: ["Industrial Leather", "Safety Footwear", "Belts & Straps", "Saddlery", "Premium Upholstery"],
    exportInfo: "Folded and palletized for export. Suitable for 20 ft or 40 ft container loading according to buyer requirements. Complete export documentation and quality certificates provided.",
  },
  {
    slug: "crust-leather",
    name: "Crust Leather",
    category: "Crust Leather",
    tagline: "Semi-finished leather ready for final finishing",
    images: gallery,
    overview:
      "Crust Leather is the semi-processed stage between wet blue and finished leather — dried, retanned, and ready for the final finishing operations of dyeing, buffing, and coating. Our crust leather is graded carefully to give tanneries and finishers a dependable base material.",
    specs: [
      { label: "Material", value: "Cow & Buffalo hide" },
      { label: "Stage", value: "Retanned, Dried Crust" },
      { label: "Colour", value: "Natural / Semi-dyed on request" },
      { label: "Thickness", value: "0.8 mm – 2.2 mm" },
      { label: "Grading", value: "A / B / C grade" },
      { label: "Packing", value: "Bundled, export-grade wrapping" },
    ],
    features: [
      "Ready for final dyeing & finishing",
      "Consistent retanning quality",
      "Available in natural or semi-dyed base",
      "Custom thickness on request",
    ],
    applications: ["Finished Leather Production", "Leather Goods", "Footwear Uppers", "Garment Leather"],
    exportInfo: "Export-ready crust leather supplied in bulk with quality grading sheets and shipment documentation for global buyers.",
  },
  {
    slug: "raw-salted-buffalo-hides",
    name: "Raw Salted Buffalo Hides",
    category: "Raw Hides",
    tagline: "Premium salted buffalo hides sourced across India",
    images: gallery,
    overview:
      "Sourced through our trusted supplier network across India, our Raw Salted Buffalo Hides are carefully selected, graded, and salt-cured to preserve quality during storage and international transit — a reliable raw material base for tanneries worldwide.",
    specs: [
      { label: "Type", value: "Raw Salted Buffalo Hide" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Weight Range", value: "As per buyer requirement" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, palletised for export" },
    ],
    features: [
      "Careful grading before shipment",
      "Consistent salting for preservation",
      "Custom sizing & grade sourcing available",
      "Reliable, established supplier network",
    ],
    applications: ["Tanneries", "Wet Blue Manufacturing", "Leather Processing Units"],
    exportInfo: "Supplied on FOB / CIF basis with export documentation, phytosanitary certification, and container-load capability.",
  },
  {
    slug: "raw-salted-cow-hides",
    name: "Raw Salted Cow Hides",
    category: "Raw Hides",
    tagline: "Quality-graded cow hides for tannery input",
    images: gallery,
    overview:
      "Our Raw Salted Cow Hides are sourced from trusted regional suppliers and inspected for grain quality, size, and curing standard before export. Each shipment is prepared to meet the specifications of international tanneries and leather processors.",
    specs: [
      { label: "Type", value: "Raw Salted Cow Hide" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Weight Range", value: "As per buyer requirement" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, palletised for export" },
    ],
    features: [
      "Grain and size inspection before dispatch",
      "Flexible sourcing by grade & weight",
      "Consistent quality across shipments",
      "Long-term supply capability",
    ],
    applications: ["Tanneries", "Wet Blue Manufacturing", "Leather Processing Units"],
    exportInfo: "Available for bulk export with full documentation, grading certificates, and flexible shipment scheduling.",
  },
  {
    slug: "raw-salted-calf-skins",
    name: "Raw Salted Calf Skins",
    category: "Raw Hides",
    tagline: "Fine-grain calf skins for premium leather goods",
    images: gallery,
    overview:
      "Prized for their fine grain and softness, our Raw Salted Calf Skins are sourced and graded specifically for buyers producing premium leather goods, garments, and accessories. Careful curing preserves the natural grain structure through export.",
    specs: [
      { label: "Type", value: "Raw Salted Calf Skin" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Grain", value: "Fine, tight grain structure" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, export wrapped" },
    ],
    features: [
      "Fine grain suited to premium goods",
      "Selective grading process",
      "Consistent curing standard",
      "Small and bulk order flexibility",
    ],
    applications: ["Premium Leather Goods", "Garment Leather", "Accessories & Small Goods"],
    exportInfo: "Export-ready with grading documentation, available in both trial and full container-load quantities.",
  },
  {
    slug: "raw-goat-skins",
    name: "Raw Goat Skins",
    category: "Raw Hides",
    tagline: "Durable, fine-textured goat skins for global buyers",
    images: gallery,
    overview:
      "Our Raw Goat Skins are sourced from established regional networks and salt-cured to preserve quality for international shipment. Known for their durability and distinctive texture, they serve a wide range of leather goods and glove-leather applications.",
    specs: [
      { label: "Type", value: "Raw Goat Skin" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Texture", value: "Fine, natural pebble grain" },
      { label: "Selection", value: "Graded A / B / C" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, export wrapped" },
    ],
    features: [
      "Distinctive natural grain texture",
      "Durable, lightweight material",
      "Careful grading & selection",
      "Reliable supply availability",
    ],
    applications: ["Glove Leather", "Leather Goods", "Garment Leather", "Accessories"],
    exportInfo: "Shipped in bulk with export documentation and phytosanitary certification for international buyers.",
  },
  {
    slug: "sheep-skins",
    name: "Sheep Skins",
    category: "Raw Hides",
    tagline: "Soft, lightweight skins subject to seasonal availability",
    images: gallery,
    overview:
      "Sheep Skins are sourced on a seasonal basis through our regional supplier network. Valued for their soft handle and lightweight structure, they are carefully graded and cured to meet buyer specifications for garment and lining leather applications.",
    specs: [
      { label: "Type", value: "Raw Sheep Skin" },
      { label: "Curing", value: "Wet Salted" },
      { label: "Availability", value: "Subject to seasonal supply" },
      { label: "Selection", value: "Graded on request" },
      { label: "Origin", value: "Sourced across India" },
      { label: "Packing", value: "Bundled, export wrapped" },
    ],
    features: [
      "Soft, lightweight handle",
      "Seasonal sourcing with advance planning",
      "Grading available on request",
      "Suited to garment & lining leather",
    ],
    applications: ["Garment Leather", "Lining Leather", "Leather Goods"],
    exportInfo: "Available on enquiry; please contact our export team for current seasonal availability and lead times.",
  },
  {
    slug: "wet-blue-hides-skins",
    name: "Wet Blue Hides & Skins",
    category: "Wet Blue Leather",
    tagline: "Chrome-tanned hides & skins, available on enquiry",
    images: gallery,
    overview:
      "In addition to our standard Wet Blue Leather line, AR LEATHERS supplies Wet Blue Hides & Skins across multiple species on enquiry — allowing buyers to source specific types and grades aligned with their production requirements.",
    specs: [
      { label: "Material", value: "Multiple species available" },
      { label: "Tannage", value: "Chrome Tanned (Wet Blue)" },
      { label: "Selection", value: "Grade & size on request" },
      { label: "Availability", value: "On enquiry" },
      { label: "Origin", value: "Sourced & processed in India" },
      { label: "Packing", value: "Palletised, export wrapped" },
    ],
    features: [
      "Flexible species & grade sourcing",
      "Custom order fulfilment",
      "Consistent chrome tanning quality",
      "Dedicated export support",
    ],
    applications: ["Tannery Processing", "Crusting & Finishing", "Leather Goods Manufacturing"],
    exportInfo: "Please share your specification sheet with our export team for a tailored quote and lead time.",
  },
  {
    slug: "custom-leather-products",
    name: "Custom Leather Products",
    category: "Custom Development",
    tagline: "Leather manufactured and sourced to your exact specification",
    images: gallery,
    overview:
      "Beyond our standard catalogue, AR LEATHERS partners with buyers to develop custom leather products — matching specific thickness, finish, colour, grain, and grading requirements. Our team works closely with clients from specification through to final shipment.",
    specs: [
      { label: "Scope", value: "Finished, Wet Blue & Crust Leather" },
      { label: "Customisation", value: "Colour, finish, thickness, grade" },
      { label: "MOQ", value: "Discussed per project" },
      { label: "Sampling", value: "Available before bulk order" },
      { label: "Origin", value: "Manufactured & sourced in India" },
      { label: "Packing", value: "As per buyer requirement" },
    ],
    features: [
      "Tailored product development",
      "Pre-production sampling",
      "Dedicated account management",
      "Long-term contract manufacturing",
    ],
    applications: ["Private Label Manufacturing", "Brand-Specific Leather Programs", "Bulk Contract Supply"],
    exportInfo: "Contact our team with your specification sheet to begin a custom development and export quote.",
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);