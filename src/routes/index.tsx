import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Pricing } from "@/components/site/Pricing";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laundry Today | Laundry & Dry Cleaning Delivered To Your Door" },
      {
        name: "description",
        content:
          "Laundry Today offers premium wash & fold, dry cleaning and ironing with FREE pickup and delivery in 24 hours. Book your pickup online in under a minute.",
      },
      { property: "og:title", content: "Laundry Today | Fresh Clothes, Delivered" },
      {
        property: "og:description",
        content:
          "Premium laundry and dry cleaning with free doorstep pickup and 24-hour delivery. Track every order in the app.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <HowItWorks />
      <Pricing />
      <Reviews />
      <Gallery />
      <Faq />
      <Contact />
    </>
  );
}
