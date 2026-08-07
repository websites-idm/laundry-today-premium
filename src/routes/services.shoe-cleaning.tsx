import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/shoe-cleaning")({
  head: () => ({
    meta: [
      { title: "Shoe Cleaning Service | Laundry Today" },
      { name: "description", content: "Professional restoration and sanitization for sneakers, boots, and leather shoes." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="shoe-cleaning" />
});
