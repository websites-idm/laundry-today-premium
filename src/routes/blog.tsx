import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";
import { blogData } from "@/components/site/blogData";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Laundry Care Tips & Blog | Laundry Today" },
      {
        name: "description",
        content:
          "Read professional tips on laundry care, extending fabric life, cleaning sneakers, caring for silk, and dry cleaning guidance.",
      },
      { property: "og:title", content: "Laundry Care Tips & Blog | Laundry Today" },
      { property: "og:description", content: "Expert guidelines on fabric preservation and cleaning tips." },
    ],
  }),
  component: BlogListingPage,
});

const categories = ["All", "Laundry Tips", "Dry Cleaning", "Shoe Care", "Home Cleaning", "Commercial Laundry"];

function BlogListingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      {/* 1. Hero Header */}
      <section className="relative py-20 bg-gradient-to-br from-primary-deep to-primary-light text-white rounded-b-[40px] shadow-lift">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-5xl px-4 text-center z-10 sm:px-6">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-extrabold tracking-[0.2em] uppercase backdrop-blur-md">
              Care Tips
            </span>
          </Reveal>
          <h1 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            The Fabric Care Blog
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Professional guidelines, stains pre-treatment tricks, and advice from our washing experts to double your garment life.
          </p>
        </div>
      </section>

      {/* 2. Listing & Search */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Sticky Search bar & Category filter */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-8">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 pr-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border-none ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-soft"
                      : "bg-secondary text-primary-deep hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="glass-card flex items-center rounded-2xl border-2 border-primary/10 bg-white px-4 py-2.5 shadow-soft focus-within:border-accent w-full md:max-w-xs shrink-0">
              <Search className="h-4.5 w-4.5 text-slate-400 mr-2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-xs font-semibold text-foreground placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Grid list of posts */}
          <div className="mt-12">
            {filteredPosts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, idx) => (
                  <Reveal key={post.slug} delay={idx * 0.05} y={40}>
                    <div className="glass-card flex flex-col justify-between overflow-hidden rounded-[32px] border border-primary/5 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift h-full group">
                      
                      {/* Image cover */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.img}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                        />
                        <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-[9px] font-black uppercase tracking-widest text-primary shadow-soft border border-primary/5">
                          {post.category}
                        </span>
                      </div>

                      {/* Content block */}
                      <div className="flex-grow p-6 flex flex-col justify-between">
                        <div>
                          {/* Metadata row */}
                          <div className="flex items-center gap-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="text-lg font-black text-primary-deep leading-snug group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500">
                            <User className="h-3.5 w-3.5" />
                            {post.author}
                          </span>
                          <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-black text-primary hover:text-primary-deep"
                          >
                            <span>Read Article</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>

                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg font-semibold text-muted-foreground">No articles match your search parameters.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="mt-4 rounded-full bg-secondary px-5 py-2.5 text-xs font-bold text-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
