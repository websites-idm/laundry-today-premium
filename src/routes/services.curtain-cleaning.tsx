import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/curtain-cleaning")({
  head: () => ({
    meta: [
      { title: "Curtain Cleaning Service | Laundry Today" },
      { name: "description", content: "Professional deep dusting and dry cleaning for sheer, linen, and blackout drapes." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="curtain-cleaning" />
});
