import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/blanket-cleaning")({
  head: () => ({
    meta: [
      { title: "Blanket & Duvet Cleaning | Laundry Today" },
      { name: "description", content: "Thorough washing and sanitization for single, double, and winter quilts in commercial drums." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="blanket-cleaning" />
});
