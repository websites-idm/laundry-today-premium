import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/carpet-cleaning")({
  head: () => ({
    meta: [
      { title: "Carpet Cleaning Service | Laundry Today" },
      { name: "description", content: "Professional deep cleaning shampoo and hot-water extraction for household carpets and rugs." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="carpet-cleaning" />
});
