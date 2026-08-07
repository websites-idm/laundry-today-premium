import { createFileRoute } from "@tanstack/react-router";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";

export const Route = createFileRoute("/services/wash-fold")({
  head: () => ({
    meta: [
      { title: "Wash & Fold Service | Laundry Today" },
      { name: "description", content: "Professional everyday laundry washed, dried and neatly folded." }
    ]
  }),
  component: () => <ServicePageTemplate serviceId="wash-fold" />
});
