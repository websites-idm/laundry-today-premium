import wash from "@/assets/svc-wash.jpg";
import dry from "@/assets/svc-dry.jpg";
import shoe from "@/assets/svc-shoe.jpg";
import curtain from "@/assets/svc-curtain.jpg";
import commercial from "@/assets/svc-commercial.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  img: string;
}

export const blogData: BlogPost[] = [
  {
    slug: "5-essential-tips-extend-clothing-lifespan",
    title: "5 Essential Tips to Extend the Lifespan of Your Clothes",
    category: "Laundry Tips",
    excerpt: "Learn simple washing and drying habits that can preserve fabric colors and stitching for years.",
    author: "Rohan Sharma",
    date: "August 4, 2026",
    readTime: "4 min read",
    img: wash,
    content: [
      "Your favorite shirts and trousers can look brand new for years if you follow simple laundry adjustments. Most clothing wear-and-tear doesn't happen from daily wearing, but from aggressive washing cycles, hot water, and high dryer heat.",
      "First, always wash your clothes in cold water. Cold water is gentler on natural fibers, protects stitching glue, and prevents dyes from bleeding or fading. Standard modern eco-friendly laundry detergents are formulated to activate perfectly in cold water, so you won't lose cleaning power.",
      "Second, separate your laundry properly. Beyond separating whites and darks, you should group your garments by weight. Heavy materials like denim jeans and hoodies can scrape and pull on delicate items like linen shirts, t-shirts, and underwear in the washer drum.",
      "Third, air dry your clothes whenever possible. If you must use a tumble dryer, select low heat. High dryer heat breaks down elastic spandex fibers, causes wools to shrink, and wears out natural cotton fabrics.",
      "Fourth, turn your printed t-shirts and jeans inside out before tossing them into the machine. This protects graphic prints from abrasive scraping against the drum walls and keeps colors crisp.",
      "By adopting these easy washing routines, you'll reduce shrinkage, maintain vibrant colors, and double the lifespan of your wardrobe."
    ]
  },
  {
    slug: "dry-cleaning-vs-wet-washing-when-to-use-which",
    title: "Dry Cleaning vs. Wet Washing: When to Use Which?",
    category: "Dry Cleaning",
    excerpt: "Understand which materials require chemical dry cleaning solvents and which are better off wet-washed.",
    author: "Priya Patel",
    date: "August 2, 2026",
    readTime: "5 min read",
    img: dry,
    content: [
      "Have you ever looked at a clothing tag, seen a 'Dry Clean Only' warning, and wondered if you could just throw it in the wash? Understanding the difference between dry cleaning and wet washing is crucial for fabric preservation.",
      "Wet washing is your standard laundry process. It uses water as the solvent, mixed with soaps and softeners, accompanied by mechanical tumbling. This is excellent for cottons, polyesters, synthetics, and everyday denim, as it washes away sweat, mud, and water-soluble soils easily.",
      "Dry cleaning, on the other hand, uses zero water. Instead, garments are treated with eco-friendly chemical solvents (like liquid hydrocarbons) that pull dirt and grease stains away without soaking the fibers. Because water isn't used, delicate natural fibers like silk, wool, velvet, and cashmere do not swell, warp, shrink, or lose their texture.",
      "So, when should you dry clean? Always dry clean structured formal wear (suits, blazers), bridal gowns, delicate lehengas, silk sarees, and leather/suede jackets. Wet washing these items will damage the inner canvas pads, shrink the wool linings, or strip natural oils from leather.",
      "If you're ever in doubt, check the care label. For high-end garments without labels, consult a professional cleaner to prevent accidental fabric destruction."
    ]
  },
  {
    slug: "how-to-keep-your-sneakers-looking-fresh",
    title: "How to Keep Your Sneakers Looking Fresh and Clean",
    category: "Shoe Care",
    excerpt: "A complete guide to cleaning white sneakers, treating leather, and maintaining shoe hygiene.",
    author: "Amit Verma",
    date: "July 30, 2026",
    readTime: "3 min read",
    img: shoe,
    content: [
      "Sneakers are a style statement, but dirt, yellowing soles, and odors can ruin their look. Keeping your shoes pristine requires active care, proper cleaning agents, and the right brushes.",
      "First, never toss your sneakers directly into a washing machine or tumble dryer. The high spinning force can crack midsoles, distort the shape, and wear out glue bonds. Dryers can shrink knit mesh uppers and warp rubber soles.",
      "Second, use specialized soft brushes for uppers. Canvas, mesh, and knit materials need gentle stroking with mild laundry cleansers. Suede shoes require completely dry crepe brushes; water will stain and stiffen suede fibers.",
      "Third, treat your laces separately. Pull the laces out of the shoes, soak them in warm water mixed with oxygen bleach, and scrub them gently. Clean laces instantly make a shoe look twice as clean.",
      "Fourth, sanitize your shoe interiors. Footwear traps sweat and heat, creating a breeding ground for bacteria. Use UV shoe sterilizers or charcoal pouches inside your shoes after wearing to extract moisture and eliminate odors.",
      "Regular care keeps leather supple, keeps canvas bright, and ensures your sneaker collection lasts for years."
    ]
  },
  {
    slug: "reducing-home-allergens-curtain-deep-clean-guide",
    title: "Reducing Home Allergens: A Curtain & Linen Deep Cleaning Guide",
    category: "Home Cleaning",
    excerpt: "How deep-cleaning drapes, quilts, and cushion covers can significantly improve indoor air quality.",
    author: "Rohan Sharma",
    date: "July 25, 2026",
    readTime: "4 min read",
    img: curtain,
    content: [
      "Indoor air pollution is a common trigger for seasonal allergies, asthma, and sneezing fits. We often vacuum carpets and dust tables, but completely forget our drapes and home upholstery.",
      "Curtains act as massive air filters. Standing next to windows, they trap incoming pollen, dust mites, pet dander, and street soot. Every time curtains are opened or closed, they release a puff of these allergens back into the room.",
      "To keep your home healthy, aim to clean your curtains every six months. Standard lightweight drapes can be washed on a gentle cold cycle, but blackout curtains, heavy velvets, and double-layered drapes should always be professionally dry cleaned to prevent backing shrinkage.",
      "Don't forget comforters and heavy quilts. Duvets collect dead skin cells and sweat, attracting dust mites. Washing bedding in oversized commercial machines ensures high-temperature sanitization that normal home washers cannot achieve.",
      "Deep cleaning home linens dramatically improves indoor air quality, reduces allergy symptoms, and keeps your living spaces smelling fresh and clean."
    ]
  },
  {
    slug: "importance-professional-linen-care-hospitality",
    title: "The Importance of Professional Linen Care in the Hospitality Sector",
    category: "Commercial Laundry",
    excerpt: "Why hotels, restaurants, and gyms require contract laundry solutions to maintain premium quality.",
    author: "Priya Patel",
    date: "July 20, 2026",
    readTime: "5 min read",
    img: commercial,
    content: [
      "In the hospitality industry, clean linens are a non-negotiable metric of quality. Whether it's high-thread-count bedsheets, pristine table covers, or thick towels, guests judge your brand instantly based on linen presentation.",
      "Commercial laundry operations require specialized chemical formulas and flatwork ironers. Heavy oil stains, wine spills, and makeup marks cannot be cleared with domestic washers. Professional facilities use multi-chamber washers that treat stains under high steam pressures.",
      "Flatwork ironers are essential for crispness. Bedsheets and tablecloths must pass through industrial heated cylinders to achieve that perfectly flat, wrinkle-free finish that guests expect in luxury rooms.",
      "Outsourcing your bulk laundry allows hospitality brands to focus entirely on guest experiences, eliminates utility and machine maintenance overheads, and guarantees a steady supply of fresh linens seven days a week.",
      "Partnering with a technology-enabled laundry contract provider ensures detailed wash logs, consistent quality, and prompt pickup/delivery cycles."
    ]
  }
];
