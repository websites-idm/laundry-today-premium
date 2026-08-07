import wash from "@/assets/svc-wash.jpg";
import washIron from "@/assets/svc-wash-iron.jpg";
import dry from "@/assets/svc-dry.jpg";
import iron from "@/assets/svc-iron.jpg";
import shoe from "@/assets/svc-shoe.jpg";
import curtain from "@/assets/svc-curtain.jpg";
import blanket from "@/assets/svc-blanket.jpg";
import carpet from "@/assets/svc-carpet.jpg";
import sofa from "@/assets/svc-sofa.jpg";
import commercial from "@/assets/svc-commercial.jpg";
import delivery from "@/assets/svc-delivery.jpg";

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  whoFor: string;
  img: string;
  pricingCategoryId: string;
  pricingFilter: string;
  benefits: { title: string; desc: string; iconName: string }[];
  included: { title: string; desc: string }[];
  process: string[];
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "wash-fold",
    title: "Wash & Fold",
    tagline: "Everyday laundry washed, dried and neatly folded.",
    description: "Our core residential laundry service handles your everyday garments with expert precision. We wash, tumble-dry, and neatly fold your shirts, t-shirts, jeans, undergarments, and towels so you don't lose your weekends to laundry chores.",
    whoFor: "Busy professionals, families, students, and anyone looking to reclaim their free time.",
    img: wash,
    pricingCategoryId: "weight",
    pricingFilter: "wash & fold",
    benefits: [
      { title: "Fabric Protection", desc: "Trained professionals wash at optimal temperatures.", iconName: "Shield" },
      { title: "Fast Delivery", desc: "Returned fresh, clean and folded in 24 hours.", iconName: "Timer" },
      { title: "Eco Detergents", desc: "Non-toxic and skin-friendly laundry detergents.", iconName: "Sparkles" }
    ],
    included: [
      { title: "Color Sorting", desc: "We separate whites and darks to prevent color bleeding." },
      { title: "Premium Washing", desc: "Gentle machine wash with eco-friendly liquid soaps." },
      { title: "Perfect Folding", desc: "Neatly folded and shrink-wrapped by category." }
    ],
    process: ["Book Pickup", "Doorstep Pickup", "Sorting & Check", "Eco Wash & Dry", "Inspection & Fold", "Package & Delivery"],
    faqs: [
      { q: "What detergents do you use?", a: "We use premium, hypoallergenic liquid detergents that are gentle on fabrics and skin." },
      { q: "How do you calculate weights?", a: "We weigh your laundry at our facility using calibrated digital scales and send you a photo receipt." }
    ]
  },
  {
    id: "wash-iron",
    title: "Wash & Iron",
    tagline: "Everyday laundry washed, dried, and steam ironed to perfection.",
    description: "Get the best of both worlds: deep clean washing and crisp professional pressing. We wash your clothes, dry them, and perform steam pressing so they are ready to wear straight out of the box.",
    whoFor: "Office-goers, business executives, and anyone requiring crisp clothing.",
    img: washIron,
    pricingCategoryId: "weight",
    pricingFilter: "wash & iron",
    benefits: [
      { title: "Crisp Creases", desc: "Steam ironed to give you that sharp, professional look.", iconName: "Sparkles" },
      { title: "Eco-Friendly", desc: "Gentle chemicals protect garment stitching.", iconName: "Shield" },
      { title: "Hanger Ready", desc: "Delivered on hangers or crisp custom-packed stacks.", iconName: "Timer" }
    ],
    included: [
      { title: "Gentle Cleaning", desc: "Detergents customized to suit fabric sensitivity." },
      { title: "Crease-Free Pressing", desc: "Professional temperature-controlled steam ironing." },
      { title: "Stain Check", desc: "Pre-treatment check for collars, cuffs, and underarms." }
    ],
    process: ["Book Pickup", "Doorstep Pickup", "Care Separation", "Machine Wash & Dry", "Steam Ironing", "Delivery"],
    faqs: [
      { q: "Are shirts delivered on hangers?", a: "Yes, shirts and trousers are delivered on hangers by default to prevent wrinkles." }
    ]
  },
  {
    id: "dry-cleaning",
    title: "Dry Cleaning",
    tagline: "Synthetic wear, wedding gowns, sarees and delicates treated with care.",
    description: "Our professional dry cleaning uses non-hazardous, eco-friendly solvents to clean delicate fabrics, suits, lehengas, silk sarees, and premium winter wear without shrinking or damaging the fibers.",
    whoFor: "Delicate designer fabrics, wedding wear, woolens, silks, and suit jackets.",
    img: dry,
    pricingCategoryId: "mens",
    pricingFilter: "",
    benefits: [
      { title: "Stain Extraction", desc: "Advanced pre-spotting and stain removal techniques.", iconName: "Sparkles" },
      { title: "Zero Shrinkage", desc: "Dry solvents protect wool, cashmere, and silk.", iconName: "Shield" },
      { title: "Odorless Clean", desc: "Eco-friendly hydrocarbon solvents ensure no chemical smell.", iconName: "Sparkles" }
    ],
    included: [
      { title: "Pre-Spotting Treatment", desc: "Targeted spotting before dry wash cycle." },
      { title: "Delicate Solvent Clean", desc: "Washed in safe, premium dry cleaning machines." },
      { title: "Steam Press & Hang", desc: "Puff-ironed and delivered with plastic garment shields." }
    ],
    process: ["Book Pickup", "Doorstep Collection", "Stain Identification", "Dry Solvent Cleaning", "Inspection & Press", "Plastic Shield Wrap"],
    faqs: [
      { q: "Do you clean heavy designer lehengas?", a: "Yes, we specialize in heavy bridal wear, lehengas, and silk sarees using delicate manual care." }
    ]
  },
  {
    id: "steam-ironing",
    title: "Steam Ironing",
    tagline: "Crisp, press-perfect finish on shirts and trousers.",
    description: "Need your pre-washed clothes to look flawless? Our premium standalone steam ironing service removes deep wrinkles from formal wear, kurtas, and casuals, leaving them looking clean and pristine.",
    whoFor: "Anyone with clean clothes looking for professional pressing support.",
    img: iron,
    pricingCategoryId: "weight",
    pricingFilter: "steam iron",
    benefits: [
      { title: "Wrinkle Eraser", desc: "High-pressure steam presses deep fibers smoothly.", iconName: "Sparkles" },
      { title: "Garment Freshness", desc: "Steam disinfects and refreshes the fabrics.", iconName: "Shield" },
      { title: "Fast Turnaround", desc: "Ironed and delivered back in under 24 hours.", iconName: "Timer" }
    ],
    included: [
      { title: "Steam Pressing", desc: "Vacuum-press boards prevent double-creases." },
      { title: "Wrinkle Defense Packaging", desc: "Garments hung or neatly cardboard-folded." }
    ],
    process: ["Book Pickup", "Pickup", "Wrinkle Inspection", "High-Pressure Steam Pressing", "Garment Tagging & Delivery"],
    faqs: [
      { q: "Do you iron silk and wool?", a: "Yes, our steam irons have electronic controls to adjust temperatures for silk, nylon, and wool." }
    ]
  },
  {
    id: "shoe-cleaning",
    title: "Shoe Cleaning",
    tagline: "Sneakers, suede, and leather restored and deodorised.",
    description: "Give your favorite shoes a second lease on life. We clean, dry, disinfect, and deodorize sneakers, boots, heels, and leather shoes using custom brushes and premium specialized cleaning solutions.",
    whoFor: "Sneakerheads, professional athletes, and anyone wanting clean footwear.",
    img: shoe,
    pricingCategoryId: "shoes",
    pricingFilter: "",
    benefits: [
      { title: "Restoration", desc: "Removes deep mud, salt stains, and yellowing.", iconName: "Sparkles" },
      { title: "Deodorization", desc: "UV light sterilization kills bacteria and odors.", iconName: "Shield" },
      { title: "Uppers & Soles Care", desc: "Custom treatments for suede, canvas, and mesh.", iconName: "Shield" }
    ],
    included: [
      { title: "Deep Sole Cleaning", desc: "Solves gravel, mud, and dirt buildup." },
      { title: "Lace Washing", desc: "Laces are separated and washed to bright white." },
      { title: "Conditioning Treatment", desc: "Suede and leather are brushed and conditioned." }
    ],
    process: ["Book Pickup", "Pickup", "Uppers/Soles Inspection", "Hand Washing & Cleaning", "UV Sterilization", "Air Dry & Delivery"],
    faqs: [
      { q: "Can you clean suede shoes?", a: "Yes, we treat suede footwear using specialized dry cleaning techniques and soft crepe brushes." }
    ]
  },
  {
    id: "curtain-cleaning",
    title: "Curtain Cleaning",
    tagline: "Take-down, deep clean and re-hang available.",
    description: "Keep your home dust-free. Our professional curtain dry cleaning removes allergens, dust mites, and odors from sheer, linen, and heavy blackout curtains.",
    whoFor: "Homeowners, landlords, and office buildings.",
    img: curtain,
    pricingCategoryId: "household",
    pricingFilter: "curtains",
    benefits: [
      { title: "Dust Extraction", desc: "Removes trapped pollen, dust, and dander.", iconName: "Shield" },
      { title: "Crease-Free", desc: "Professionally ironed and packed to prevent folds.", iconName: "Sparkles" }
    ],
    included: [
      { title: "Measurements", desc: "Checking dimensions to verify zero shrinkage." },
      { title: "Deep Dusting", desc: "Pre-wash vacuuming to lift loose dry particles." }
    ],
    process: ["Book Pickup", "Collection", "Inspection & Measurements", "Dry Cleaning", "Professional Pressing", "Delivery"],
    faqs: [
      { q: "Do you clean blackout curtains?", a: "Yes, we clean heavy blackout, velvet, and lined curtains without damaging the backing layer." }
    ]
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    tagline: "Premium oriental rugs and carpets restored.",
    description: "Deep hot-water extraction and steam cleaning for home rugs. We extract embedded dust, food spills, and pet odors, leaving your carpets clean and sanitised.",
    whoFor: "Families with kids/pets, allergy sufferers, and homeowners.",
    img: carpet,
    pricingCategoryId: "household",
    pricingFilter: "carpet",
    benefits: [
      { title: "Bacteria Kill", desc: "Hot water extraction kills germs and dust mites.", iconName: "Shield" },
      { title: "Stain Removal", desc: "Pre-spotting pulls up soda, tea, and grease stains.", iconName: "Sparkles" }
    ],
    included: [
      { title: "Agitation Wash", desc: "Heavy brushes lift pile fibers to pull up dirt." },
      { title: "Deodorizer Spray", desc: "Delivers a fresh scent across the carpet pile." }
    ],
    process: ["Book Pickup", "Pickup", "Pre-Vacuuming", "Shampoo & Agitation", "Extraction & Rinsing", "Drying & Delivery"],
    faqs: [
      { q: "How long does carpet cleaning take?", a: "Carpet cleaning requires a specialized wash and drying cycle. It is returned within 3 to 4 days." }
    ]
  },
  {
    id: "blanket-cleaning",
    title: "Blanket Cleaning",
    tagline: "Bulky bedding and quilts washed in oversized machines.",
    description: "Keep your sleep clean. We wash single and double blankets, quilts, comforters, and duvets in commercial oversized washers to thoroughly rinse out sweat, dander, and odors.",
    whoFor: "Season changeovers, hotels, and general home bedding refreshes.",
    img: blanket,
    pricingCategoryId: "household",
    pricingFilter: "blanket",
    benefits: [
      { title: "Deep Rinse", desc: "Large commercial drums fully extract soap soapy residue.", iconName: "Shield" },
      { title: "Sanitization", desc: "Thermo-disinfection ensures fresh sleeping bedding.", iconName: "Shield" }
    ],
    included: [
      { title: "Fabric Conditioning", desc: "Softens quilt fibers for a plush, warm feel." },
      { title: "Hygienic Seals", desc: "Shrink-packed to keep fresh until winter." }
    ],
    process: ["Book Pickup", "Collection", "Inspection", "Oversized Drum Wash", "Tumble Dry", "Hygienic Seal Packaging"],
    faqs: [
      { q: "Do you clean heavy double quilts?", a: "Yes, we clean single, double, and heavy winter duvets/quilts in specialized large washers." }
    ]
  },
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    tagline: "Premium fabric and leather sofa sanitization.",
    description: "Remove sweat stains, dirt, and dust from your living room furniture. We spray shampoo, scrub, and vacuum extraction clean sofa seats on-site or pick up cushion covers.",
    whoFor: "Homeowners, offices, and lounges.",
    img: sofa,
    pricingCategoryId: "household",
    pricingFilter: "sofa",
    benefits: [
      { title: "Deep Extract", desc: "Vacuum suction extracts foam, dirt, and water.", iconName: "Sparkles" },
      { title: "Anti-Allergen", desc: "Sanitizes sofa fabrics to eliminate dust mites.", iconName: "Shield" }
    ],
    included: [
      { title: "Fabric Conditioning", desc: "Restores fabric feel and soft color hues." },
      { title: "Foaming Shampoo Wash", desc: "Gently scrubs uppers without soaking wooden framing." }
    ],
    process: ["Book Pickup", "Upholstery Check", "On-site Foam Shampooing", "Scrubbing & Spot Check", "Vacuum Extraction", "Drying & Finish"],
    faqs: [
      { q: "Is sofa cleaning done on-site?", a: "Yes, sofa cleaning is performed directly at your home or office. It requires 4 to 6 hours to dry afterward." }
    ]
  },
  {
    id: "commercial-laundry",
    title: "Commercial Laundry",
    tagline: "Hotels, gyms, restaurants and corporate contracts.",
    description: "We provide high-capacity linen washing and contract dry cleaning for hotels, restaurants, hospitals, spas, corporate uniforms, and fitness centers with prompt delivery schedules.",
    whoFor: "Hotels, Gyms, Restaurants, Spas, Spitals, and Corporate Offices.",
    img: commercial,
    pricingCategoryId: "household",
    pricingFilter: "commercial",
    benefits: [
      { title: "Contract Rates", desc: "Bulk discount structures for corporate partners.", iconName: "Timer" },
      { title: "Fast Turnaround", desc: "Scheduled pickups and next-day deliveries.", iconName: "Timer" },
      { title: "Stain Guarantee", desc: "Hospital-grade sanitization washes out oil and ink.", iconName: "Shield" }
    ],
    included: [
      { title: "Linen Ironing", desc: "Industrial flatwork pressing for bedsheets and tablecloths." },
      { title: "Individual Invoicing", desc: "Detailed weigh sheets and automated contract accounting." }
    ],
    process: ["Inquiry & Quote", "Schedule Setup", "Bulk Collection", "Industrial Wash & Press", "Invoicing & Delivery"],
    faqs: [
      { q: "Do you offer contract discounts?", a: "Yes, we offer custom contract pricing based on monthly volumes and frequency." }
    ]
  },
  {
    id: "express-laundry",
    title: "Express Laundry",
    tagline: "Next-day and same-day express wash services.",
    description: "In a hurry? Our Express Laundry service guarantees priority washing, drying, and steam ironing with delivery back to your doorstep in as little as 12 to 24 hours.",
    whoFor: "Spontaneous travelers, urgent event needs, and last-minute laundry emergencies.",
    img: delivery,
    pricingCategoryId: "weight",
    pricingFilter: "express",
    benefits: [
      { title: "Priority Processing", desc: "Your items jump straight to the head of the queue.", iconName: "Timer" },
      { title: "Guaranteed Return", desc: "Delivered back within 12-24 hours without fail.", iconName: "Timer" }
    ],
    included: [
      { title: "Fast Track Wash", desc: "Separate washing and flash dry cycles." },
      { title: "Direct Dispatch", desc: "Instant courier dispatch as soon as packaging completes." }
    ],
    process: ["Book Express", "Priority Pickup", "Separate Express Wash", "Flash Dry & Press", "Instant Delivery Dispatch"],
    faqs: [
      { q: "What is the surcharge for express?", a: "Express laundry carries a premium of 50% to 100% depending on same-day or next-day requirements." }
    ]
  }
];
