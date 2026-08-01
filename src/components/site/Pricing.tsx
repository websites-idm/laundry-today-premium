import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Scale, Footprints, User, Sparkles, Home, Search, X, Plus, Minus, ClipboardList, ChevronRight } from "lucide-react";
import { Reveal, SectionTitle } from "./common";
import { pricingData } from "./pricingData";
import { openBooking } from "./BookingPopup";

export function Pricing() {
  const [activeCategory, setActiveCategory] = useState("weight");
  const [activeSubCategory, setActiveSubCategory] = useState("Towels & Bedding");
  const [searchQuery, setSearchQuery] = useState("");

  // Shopping Cart state
  const [cart, setCart] = useState<Record<string, { price: string; quantity: number }>>({});

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Scale":
        return <Scale className="h-5 w-5" />;
      case "Footprints":
        return <Footprints className="h-5 w-5" />;
      case "User":
        return <User className="h-5 w-5" />;
      case "Sparkles":
        return <Sparkles className="h-5 w-5" />;
      case "Home":
        return <Home className="h-5 w-5" />;
      default:
        return <Sparkles className="h-5 w-5" />;
    }
  };

  // Cart operations
  const addToCart = (itemName: string, itemPrice: string) => {
    setCart((prev) => ({
      ...prev,
      [itemName]: { price: itemPrice, quantity: 1 },
    }));
  };

  const updateQuantity = (itemName: string, delta: number) => {
    setCart((prev) => {
      const current = prev[itemName];
      if (!current) return prev;
      const newQty = current.quantity + delta;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[itemName];
        return updated;
      }
      return {
        ...prev,
        [itemName]: { ...current, quantity: newQty },
      };
    });
  };

  const cartItemsCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  // Find active category
  const currentCategory = pricingData.find((cat) => cat.id === activeCategory) || pricingData[0];

  // Get active items
  let currentItems = currentCategory.items || [];
  if (currentCategory.subCategories) {
    const currentSub =
      currentCategory.subCategories.find((sub) => sub.name === activeSubCategory) ||
      currentCategory.subCategories[0];
    currentItems = currentSub.items;
  }

  // Cross-category search results
  const searchResults: Array<{ name: string; price: string; categoryPath: string }> = [];
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    pricingData.forEach((cat) => {
      if (cat.items) {
        cat.items.forEach((item) => {
          if (item.name.toLowerCase().includes(query)) {
            searchResults.push({
              name: item.name,
              price: item.price,
              categoryPath: cat.name,
            });
          }
        });
      } else if (cat.subCategories) {
        cat.subCategories.forEach((sub) => {
          sub.items.forEach((item) => {
            if (item.name.toLowerCase().includes(query)) {
              searchResults.push({
                name: item.name,
                price: item.price,
                categoryPath: `${cat.name} › ${sub.name}`,
              });
            }
          });
        });
      }
    });
  }

  const displayItems = searchQuery.trim() ? searchResults : currentItems;

  return (
    <section id="pricing" className="bg-secondary py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          ribbon="Pricing"
          title="Service Pricing"
          subtitle="Transparent pricing for every garment and household item. Select a category below to browse our complete service catalog."
        />

        {/* Search Bar - Sticky on mobile under header */}
        <Reveal delay={0.08} className="mt-12 max-w-2xl mx-auto">
          <div className="sticky top-[68px] z-30 mb-8 px-1 sm:px-0">
            <div className="glass-card relative flex items-center rounded-full border-2 border-primary/10 shadow-soft px-5 py-3 bg-white/85 backdrop-blur-xl transition-all duration-300 focus-within:border-accent">
              <Search className="h-5 w-5 text-muted-foreground mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search garments (e.g. Gown, Leather, Blanket)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/60 text-sm font-semibold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-full hover:bg-secondary text-muted-foreground transition-colors cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </Reveal>

        {/* Category Tabs */}
        {!searchQuery.trim() && (
          <Reveal delay={0.12}>
            <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 justify-start md:justify-center">
              {pricingData.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      if (cat.subCategories && cat.subCategories.length > 0) {
                        setActiveSubCategory(cat.subCategories[0].name);
                      }
                    }}
                    className={`flex items-center gap-2 rounded-full px-5 py-3 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? "accent-gradient text-accent-foreground shadow-lift scale-102"
                        : "bg-white text-muted-foreground border border-primary/10 hover:border-accent/40 hover:text-primary-deep hover:bg-secondary/40"
                    }`}
                  >
                    {getIcon(cat.icon)}
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* Household Subcategories */}
        {!searchQuery.trim() && currentCategory.subCategories && (
          <Reveal delay={0.16}>
            <div className="flex justify-center gap-4 sm:gap-6 mb-8 border-b border-primary/5 pb-2.5 max-w-lg mx-auto overflow-x-auto no-scrollbar">
              {currentCategory.subCategories.map((sub) => {
                const isSubActive = activeSubCategory === sub.name;
                return (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSubCategory(sub.name)}
                    className="relative py-2 px-3 text-sm font-extrabold text-primary-deep transition-all duration-200 cursor-pointer whitespace-nowrap"
                  >
                    <span className={isSubActive ? "text-accent" : "text-muted-foreground hover:text-primary-deep"}>
                      {sub.name}
                    </span>
                    {isSubActive && (
                      <motion.div
                        layoutId="activeSubCategoryLine"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </Reveal>
        )}

        {/* Category Count and Price Summary */}
        <Reveal delay={0.2}>
          <AnimatePresence mode="wait">
            {!searchQuery.trim() ? (
              <motion.div
                key={activeCategory + (currentCategory.subCategories ? activeSubCategory : "")}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-primary/10 pb-5 mb-8"
              >
                <div>
                  <h3 className="text-xl font-extrabold text-primary-deep">
                    {currentCategory.name}
                    {currentCategory.subCategories && ` › ${activeSubCategory}`}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Discover premium care for your garments and household items
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-primary/10 px-4 py-2.5 shadow-soft min-w-[100px]">
                    <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Services</div>
                    <div className="text-base font-extrabold text-primary-deep mt-0.5">
                      {currentCategory.subCategories
                        ? currentCategory.subCategories.find((s) => s.name === activeSubCategory)?.items.length
                        : currentCategory.items?.length}{" "}
                      items
                    </div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-primary/10 px-4 py-2.5 shadow-soft min-w-[120px]">
                    <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Starting From</div>
                    <div className="text-base font-extrabold text-accent mt-0.5">
                      {currentCategory.summary.startPrice}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-primary/10 pb-5 mb-8">
                <div>
                  <h3 className="text-xl font-extrabold text-primary-deep">Search Results</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Matching garments found in our service catalog
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-primary/10 px-4 py-2.5 shadow-soft min-w-[110px]">
                    <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Matches</div>
                    <div className="text-base font-extrabold text-primary-deep mt-0.5">
                      {searchResults.length} {searchResults.length === 1 ? "item" : "items"}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </Reveal>

        {/* Grid of Pricing Cards */}
        <Reveal delay={0.25}>
          <motion.div layout="position" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {displayItems.map((item, index) => {
                const quantity = cart[item.name]?.quantity || 0;
                return (
                  <motion.div
                    key={`${item.name}-${index}`}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22, delay: Math.min(index * 0.015, 0.15) }}
                    className="glass-card lift relative flex items-center justify-between rounded-3xl border border-primary/10 bg-white/80 p-5 transition-colors duration-300 hover:border-accent hover:bg-white"
                  >
                    <div className="flex-1 min-w-0 pr-4">
                      <h4 className="text-sm font-extrabold text-primary-deep truncate">{item.name}</h4>
                      {searchQuery.trim() && "categoryPath" in item && (
                        <span className="mt-1 inline-flex items-center text-[8px] font-extrabold tracking-widest text-muted-foreground bg-secondary px-2 py-0.5 rounded-full uppercase">
                          {item.categoryPath}
                        </span>
                      )}
                    </div>
                    <div className="shrink-0 flex items-center gap-2.5">
                      <span className="accent-gradient rounded-full px-4.5 py-1.5 text-xs font-extrabold text-accent-foreground shadow-soft">
                        {item.price}
                      </span>
                      {quantity === 0 ? (
                        <button
                          onClick={() => addToCart(item.name, item.price)}
                          className="flex h-8 w-8 place-items-center justify-center rounded-full bg-secondary text-primary-deep hover:accent-gradient hover:text-accent-foreground transition-all duration-300 cursor-pointer shadow-soft border border-primary/10 active:scale-90"
                          title={`Add ${item.name} to order`}
                        >
                          <Plus className="h-4.5 w-4.5" />
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 bg-secondary border border-primary/10 rounded-full px-2 py-1 shadow-soft">
                          <button
                            onClick={() => updateQuantity(item.name, -1)}
                            className="grid h-6 w-6 place-items-center rounded-full bg-white text-primary-deep hover:bg-primary-deep/5 transition-colors duration-200 cursor-pointer"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs font-extrabold text-primary-deep min-w-[12px] text-center">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.name, 1)}
                            className="grid h-6 w-6 place-items-center rounded-full bg-white text-primary-deep hover:bg-primary-deep/5 transition-colors duration-200 cursor-pointer"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Empty Results Placeholder */}
          {displayItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card text-center py-16 px-4 rounded-3xl border border-primary/10 bg-white max-w-md mx-auto"
            >
              <p className="text-base font-bold text-primary-deep">No services found</p>
              <p className="text-xs text-muted-foreground mt-1">
                Try searching for something else or tap a category tab.
              </p>
            </motion.div>
          )}
        </Reveal>
      </div>

      {/* Floating Order Cart Panel */}
      <AnimatePresence>
        {cartItemsCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-0 bottom-20 lg:bottom-6 z-40 px-4 max-w-2xl mx-auto pointer-events-none"
          >
            <div className="glass-card brand-gradient text-primary-foreground flex items-center justify-between rounded-[28px] p-4 shadow-lift pointer-events-auto border border-white/20">
              <div className="flex items-center gap-3">
                <span className="bg-white/20 backdrop-blur-md rounded-2xl p-2.5">
                  <ClipboardList className="h-5 w-5 text-white" />
                </span>
                <div>
                  <div className="text-sm font-extrabold">{cartItemsCount} {cartItemsCount === 1 ? "item" : "items"} selected</div>
                  <div className="text-[11px] text-white/80 font-medium">Ready to schedule pickup</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setCart({})}
                  className="text-xs font-bold text-white/85 hover:text-white underline px-2 py-1 cursor-pointer bg-transparent border-0"
                >
                  Clear
                </button>
                <button
                  onClick={() => {
                    const cartItemsArray = Object.entries(cart).map(([name, info]) => ({
                      name,
                      price: info.price,
                      quantity: info.quantity,
                    }));
                    openBooking(undefined, cartItemsArray);
                  }}
                  className="bg-white text-primary-deep rounded-full px-5 py-3 text-xs font-extrabold tracking-wider uppercase hover:bg-secondary transition-all active:scale-95 shadow-soft flex items-center gap-1.5 cursor-pointer border-0"
                >
                  <span>Book Order</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

