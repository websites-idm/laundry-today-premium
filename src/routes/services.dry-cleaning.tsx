import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/dry-cleaning")({
  head: () => ({
    meta: [
      { title: "Dry Cleaning Service | Laundry Today" },
      { name: "description", content: "Premium chemical-free dry cleaning for designer gowns, suits and delicates." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="dry-cleaning" />
});
