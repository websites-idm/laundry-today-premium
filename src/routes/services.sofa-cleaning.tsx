import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/sofa-cleaning")({
  head: () => ({
    meta: [
      { title: "Sofa Cleaning Service | Laundry Today" },
      { name: "description", content: "Professional on-site upholstery shampoo scrubbing and moisture extraction." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="sofa-cleaning" />
});
