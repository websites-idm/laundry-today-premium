export interface PricingItem {
  name: string;
  price: string;
}

export interface SubCategory {
  name: string;
  items: PricingItem[];
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Used to map to Lucide icons
  summary: {
    count: number;
    startPrice: string;
  };
  subCategories?: SubCategory[];
  items?: PricingItem[];
}

export const pricingData: Category[] = [
  {
    id: "weight",
    name: "Laundry by Weight",
    icon: "Scale",
    summary: {
      count: 5,
      startPrice: "₹99/kg"
    },
    items: [
      { name: "Steam Iron", price: "₹99/kg" },
      { name: "Wash & Fold", price: "₹99/kg" },
      { name: "Wash & Iron", price: "₹149/kg" },
      { name: "Express Laundry (Wash & Fold)", price: "₹199/kg" },
      { name: "Express Laundry (Wash & Iron)", price: "₹249/kg" }
    ]
  },
  {
    id: "shoes",
    name: "Shoe Laundry",
    icon: "Footprints",
    summary: {
      count: 5,
      startPrice: "₹299"
    },
    items: [
      { name: "Flip-Flops / Sandals", price: "₹299" },
      { name: "Sports Shoes", price: "₹299" },
      { name: "Leather Shoes", price: "₹399" },
      { name: "Premium Sneakers", price: "₹499" },
      { name: "Boots", price: "₹599" }
    ]
  },
  {
    id: "mens",
    name: "Men's Dry Cleaning",
    icon: "User",
    summary: {
      count: 24,
      startPrice: "₹49"
    },
    items: [
      { name: "Shirt", price: "₹99" },
      { name: "T-Shirt", price: "₹99" },
      { name: "Pant", price: "₹99" },
      { name: "Jeans", price: "₹99" },
      { name: "Jogger", price: "₹99" },
      { name: "Shorts", price: "₹99" },
      { name: "Kurta", price: "₹99" },
      { name: "Designer / Heavy Kurta", price: "₹149" },
      { name: "Pyjama / Night Suit", price: "₹99" },
      { name: "Lungi / Dhoti", price: "₹149" },
      { name: "Sweatshirt", price: "₹99" },
      { name: "Hoodie", price: "₹149" },
      { name: "Sweater", price: "₹149" },
      { name: "Waistcoat", price: "₹149" },
      { name: "Winter Jacket", price: "₹199" },
      { name: "Blazer / Coat", price: "₹249" },
      { name: "Sherwani", price: "₹299" },
      { name: "Designer / Heavy Sherwani", price: "₹499" },
      { name: "Tie", price: "₹49" },
      { name: "Muffler", price: "₹49" },
      { name: "Cap", price: "₹49" },
      { name: "Hand Gloves", price: "₹99" },
      { name: "Leather Pant", price: "₹399" },
      { name: "Leather Jacket", price: "₹399" }
    ]
  },
  {
    id: "womens",
    name: "Women's Dry Cleaning",
    icon: "Sparkles",
    summary: {
      count: 41,
      startPrice: "₹99"
    },
    items: [
      { name: "Shirt / T-Shirt / Top", price: "₹99" },
      { name: "Blouse", price: "₹99" },
      { name: "Designer Blouse", price: "₹149" },
      { name: "Kurti", price: "₹99" },
      { name: "Designer Kurti", price: "₹149" },
      { name: "Trouser / Pant", price: "₹99" },
      { name: "Jeans", price: "₹99" },
      { name: "Leggings", price: "₹99" },
      { name: "Palazzo", price: "₹99" },
      { name: "Shorts / Skirt", price: "₹99" },
      { name: "Pyjama", price: "₹99" },
      { name: "Petticoat", price: "₹99" },
      { name: "Dupatta", price: "₹99" },
      { name: "Designer / Heavy Dupatta", price: "₹149" },
      { name: "Scarf", price: "₹99" },
      { name: "Shawl", price: "₹99" },
      { name: "Shrug", price: "₹149" },
      { name: "Sweater", price: "₹149" },
      { name: "Hoodie", price: "₹149" },
      { name: "Winter Jacket", price: "₹199" },
      { name: "Blazer", price: "₹249" },
      { name: "Overcoat", price: "₹299" },
      { name: "Jumpsuit", price: "₹199" },
      { name: "One Piece Dress", price: "₹149" },
      { name: "Western Dress", price: "₹149" },
      { name: "Gown", price: "₹299" },
      { name: "Designer Gown", price: "₹399" },
      { name: "Heavy / Designer Gown", price: "₹499" },
      { name: "Saree (Cotton / Silk)", price: "₹199" },
      { name: "Heavy / Designer Saree", price: "₹399" },
      { name: "Lehenga", price: "₹299" },
      { name: "Designer Lehenga", price: "₹399" },
      { name: "Bridal Lehenga", price: "₹499" },
      { name: "Heavy Lehenga", price: "₹599" },
      { name: "Ghagra Choli", price: "₹399" },
      { name: "Designer Ghagra Choli", price: "₹499" },
      { name: "Anarkali", price: "₹299" },
      { name: "Designer Anarkali", price: "₹399" },
      { name: "Burkha", price: "₹199" },
      { name: "Leather Pant", price: "₹399" },
      { name: "Leather Jacket", price: "₹399" }
    ]
  },
  {
    id: "household",
    name: "Household Items",
    icon: "Home",
    summary: {
      count: 35,
      startPrice: "₹49"
    },
    subCategories: [
      {
        name: "Towels & Bedding",
        items: [
          { name: "Hand Towel / Napkin", price: "₹59" },
          { name: "Baby Blanket", price: "₹149" },
          { name: "Baby Towel", price: "₹99" },
          { name: "Bath Towel", price: "₹99" },
          { name: "Bedsheet (Single)", price: "₹149" },
          { name: "Bedsheet (Double)", price: "₹199" },
          { name: "Pillow (Small)", price: "₹49" },
          { name: "Pillow (Large)", price: "₹99" },
          { name: "Cushion (Small)", price: "₹99" },
          { name: "Cushion (Medium)", price: "₹149" },
          { name: "Cushion (Large)", price: "₹199" },
          { name: "Doormat (Small)", price: "₹99" },
          { name: "Doormat (Large)", price: "₹199" }
        ]
      },
      {
        name: "Home Furnishings",
        items: [
          { name: "Table Mat (Small)", price: "₹99" },
          { name: "Table Mat (Large)", price: "₹199" },
          { name: "Blanket / Quilt (Single)", price: "₹299" },
          { name: "Blanket / Quilt (Double)", price: "₹399" },
          { name: "Blanket / Quilt (Heavy)", price: "₹499" },
          { name: "Sofa Cover (Per Seat)", price: "₹99" },
          { name: "Carpet / Rug", price: "₹30/sq.ft." },
          { name: "Curtains (Single Layer)", price: "₹7/sq.ft." },
          { name: "Curtains (Double Layer)", price: "₹12/sq.ft." },
          { name: "Single Bed Cover", price: "₹199" },
          { name: "Double Bed Cover", price: "₹299" }
        ]
      },
      {
        name: "Accessories & Travel",
        items: [
          { name: "Bathrobe", price: "₹149" },
          { name: "Leather Wallet", price: "₹199" },
          { name: "Bag / Purse", price: "₹299" },
          { name: "Leather Bag / Purse", price: "₹399" },
          { name: "Trolley Bag (Small)", price: "₹299" },
          { name: "Trolley Bag (Medium)", price: "₹399" },
          { name: "Trolley Bag (Large)", price: "₹499" },
          { name: "Soft Toy (Small)", price: "₹99" },
          { name: "Soft Toy (Medium)", price: "₹199" },
          { name: "Soft Toy (Large)", price: "₹299" },
          { name: "Soft Toy (Extra Large)", price: "₹399" }
        ]
      }
    ]
  }
];
