import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/site/common";
import { blogData } from "@/components/site/blogData";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogData.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: `${post?.title || "Fabric Care Tips"} | Laundry Today` },
        {
          name: "description",
          content: post?.excerpt || "Professional fabric care and laundry cleaning advice by Laundry Today.",
        },
        { property: "og:title", content: `${post?.title || "Fabric Care Tips"} | Laundry Today` },
        { property: "og:description", content: post?.excerpt || "" },
      ],
    };
  },
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-black text-primary-deep">Article Not Found</h1>
        <p className="mt-2 text-sm text-muted-foreground">The requested article could not be located.</p>
        <Link to="/blog" className="mt-6 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white shadow-soft">
          Back to Blog
        </Link>
      </div>
    );
  }

  // Get other blog posts for cross-linking
  const relatedPosts = blogData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="pt-24 sm:pt-28 text-foreground/80 overflow-hidden">
      
      {/* 1. Back button & Category */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 mt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* 2. Article Core Header */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <span className="inline-flex items-center rounded-full bg-secondary px-4 py-1 text-xs font-extrabold uppercase tracking-widest text-primary border border-primary/5">
            {post.category}
          </span>
          
          <h1 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl tracking-tight leading-tight text-primary-deep">
            {post.title}
          </h1>

          {/* Metadata row */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider pb-6 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-primary" />
              Published by {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" />
              {post.readTime}
            </span>
          </div>

          {/* Cover image banner */}
          <div className="mt-8 relative rounded-[32px] overflow-hidden shadow-soft h-[350px] sm:h-[450px]">
            <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
          </div>

          {/* Reading content block */}
          <article className="mt-12 space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground font-medium">
            {post.content.map((pText, index) => (
              <p key={index}>{pText}</p>
            ))}
          </article>

          {/* Share / Tags block */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-2">
            <Tag className="h-4.5 w-4.5 text-slate-400" />
            <span className="text-xs font-black uppercase tracking-wider text-slate-500">Tags: </span>
            <span className="text-xs font-bold text-primary-deep bg-secondary px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-xs font-bold text-primary-deep bg-secondary px-3 py-1 rounded-full">Fabric Care</span>
          </div>

        </div>
      </section>

      {/* 3. Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-secondary rounded-t-[40px]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <SectionTitle ribbon="Continue Reading" title="Recommended Articles" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((rPost, idx) => (
                <Reveal key={rPost.slug} delay={idx * 0.05} y={30}>
                  <div className="h-full rounded-3xl bg-white p-6 shadow-soft hover:shadow-lift transition-all border border-primary/5 flex flex-col justify-between group">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary">{rPost.category}</span>
                      <h4 className="mt-2 text-base font-extrabold text-primary-deep group-hover:text-primary transition-colors leading-snug">{rPost.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">{rPost.excerpt}</p>
                    </div>
                    <div className="mt-6">
                      <Link
                        to={`/blog/${rPost.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-primary"
                      >
                        <span>Read Post</span>
                        <Clock className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
